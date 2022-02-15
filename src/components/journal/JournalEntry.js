import React from 'react';

export const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg)',
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">A new day</p>
				<p className="journal__entry-content">
					Sint est elit commodo ipsum ex irure eu anim ipsum do
					nostrud.
				</p>
			</div>

			<div className="journal__entry-datebox">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
