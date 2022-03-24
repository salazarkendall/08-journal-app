import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activateNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	const { active: note } = useSelector((state) => state.notes);

	const [formValues, handleInputChange, resetInputs] = useForm(note);
	const { title, body } = formValues;

	const activeId = useRef(note.id);
	const dispatch = useDispatch();

	useEffect(() => {
		if (note.id !== activeId.current) {
			resetInputs(note);
			activeId.current = note.id;
		}
	}, [note, resetInputs]);

	useEffect(() => {
		dispatch(activateNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					autoComplete="off"
					className="notes__title-input"
					name="title"
					onChange={handleInputChange}
					placeholder="Some awesome title"
					type="text"
					value={title}
				/>
				<textarea
					className="notes__text-area"
					name="body"
					onChange={handleInputChange}
					placeholder="What is on your mind?"
					value={body}
				></textarea>
				{note.url && (
					<div className="notes__image">
						<img
							src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
							alt="grapefruit"
						/>
					</div>
				)}
			</div>
		</div>
	);
};
