import { types } from '../types/types';

const initState = {
	loading: false,
	errorMessage: null,
};

export const uiReducer = (state = initState, action) => {
	switch (action.type) {
		case types.uiSetError:
			return {
				...state,
				errorMessage: action.payload,
			};
		case types.uiRemoveSetError:
			return {
				...state,
				errorMessage: null,
			};
		case types.uiStartLoading:
			return {
				...state,
				loading: true,
			};
		case types.uiFinishLoading:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
