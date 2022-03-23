import React from 'react';
import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

export const Sidebar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth); // check authReducer for some guidance: ./src/reducers/authReducer.js

	const handleLogout = () => dispatch(startLogout());

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="u-mt-2">
					<i className="far fa-moon"></i>
					<span>{name}</span>
				</h3>
				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>
			<div className="journal__sidebar-new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="u-mt-2">New Entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
};
