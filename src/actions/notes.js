import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

// Set an active note into the store (noteReducer)
export const activateNote = (id, note) => ({
	type: types.noteActive,
	payload: { id, ...note },
});

// Set an active note into the store (noteReducer)
export const addNewNote = (id, note) => ({
	type: types.noteAddNew,
	payload: {
		id,
		...note,
	},
});

export const refreshNote = (id, note) => ({
	type: types.noteUpdated,
	payload: {
		id,
		note: {
			id,
			...note,
		},
	},
});

export const setNotes = (notes) => ({
	type: types.noteLoad,
	payload: notes,
});

export const deleteNote = (id) => ({ type: types.noteDelete, payload: id });

export const purgeNotesLogout = () => ({ type: types.noteLogoutCleaning });

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
		dispatch(activateNote(doc.id, newNote));
		dispatch(addNewNote(doc.id, newNote));
	};
};

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!note.url) {
			delete note.url;
		}

		const noteToFirestore = { ...note };
		delete noteToFirestore.id;
		await db
			.doc(`/${uid}/journal/notes/${note.id}`)
			.update(noteToFirestore);

		dispatch(refreshNote(note.id, note));
		Swal.fire('Saved', note.title, 'success');
	};
};

export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active: activeNote } = getState().notes;

		Swal.fire({
			title: 'Uploading...',
			text: 'Please wait...',
			allowOutsideClick: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			},
		});

		const fileUrl = await fileUpload(file);
		console.log(fileUrl);

		activeNote.url = fileUrl;
		console.log(activeNote);
		dispatch(startSaveNote(activeNote));

		Swal.close();
	};
};

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;
		await db.doc(`${uid}/journal/notes/${id}`).delete();
		dispatch(deleteNote(id));
	};
};
