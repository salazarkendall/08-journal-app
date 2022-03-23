import { types } from '../types/types';

const initState = {
	notes: [],
	active: null,
};

export const notesReducer = (state = initState, action) => {
	switch (action.type) {
		case types.noteActive:
			return {
				...state,
				active: {
					...action.payload,
				},
			};
		case types.noteLoad:
			return {
				...state,
				notes: [...action.payload],
			};
		default:
			return state;
	}
};
