import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activateNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {
	const noteDate = moment(date);
	const dispatch = useDispatch();

	const handleOnClick = () =>
		dispatch(activateNote(id, { date, title, body, url }));

	return (
		<div className="journal__entry" onClick={handleOnClick}>
			{url && (
				<div
					className="journal__entry-picture"
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
					}}
				></div>
			)}

			<div className="journal__entry-body">
				<p className="journal__entry-title">{title}</p>
				<p className="journal__entry-content">{body}</p>
			</div>

			<div className="journal__entry-datebox">
				<h4>{noteDate.format('dddd')}</h4>
				<span>{noteDate.format('Do')}</span>
			</div>
		</div>
	);
};
