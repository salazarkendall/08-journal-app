import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);

	const handleSave = () => {
		console.log(active);
		dispatch(startSaveNote(active));
	};

	const handleNewPicture = () =>
		document.getElementById('fileSelector').click();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUploading(file));
		}
	};

	return (
		<div className="notes__appbar">
			<span>August 28, 2020</span>
			<input
				id="fileSelector"
				name="file"
				onChange={handleFileChange}
				style={{ display: 'none' }}
				type="file"
			/>
			<div>
				<button onClick={handleNewPicture} className="btn">
					Picture
				</button>
				<button onClick={handleSave} className="btn">
					Save
				</button>
			</div>
		</div>
	);
};
