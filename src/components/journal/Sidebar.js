import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="u-mt-2">
					<i className="far fa-moon"></i>
					<span> Kendall</span>
				</h3>
				<button className="btn">Logout</button>
			</div>

			<div className="journal__sidebar-new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="u-mt-2">New Entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
};