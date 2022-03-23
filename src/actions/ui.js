import { types } from '../types/types';

// ---> Following functions will be used inside dispatch() <---

export const setError = (err) => ({
	type: types.uiSetError,
	payload: err,
});
export const removeError = () => ({ type: types.uiRemoveSetError });

export const startLoading = () => ({ type: types.uiStartLoading });

export const finishLoading = () => ({ type: types.uiFinishLoading });
