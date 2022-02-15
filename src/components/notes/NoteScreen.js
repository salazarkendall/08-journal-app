import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesome title"
					className="notes__title-input"
					autoComplete="off"
				/>
				<textarea
					placeholder="What is on your mind?"
					className="notes__text-area"
				></textarea>
				<div className="notes__image">
					<img
						src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
						alt="grapefruit"
					/>
				</div>
			</div>
		</div>
	);
};
