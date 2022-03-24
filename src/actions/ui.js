import { types } from '../types/types';

// Set an error message inside store
export const setError = (err) => ({ type: types.uiSetError, payload: err });

// Remove an error message from store
export const removeError = () => ({ type: types.uiRemoveSetError });

// Set loading inside store. Used in startLoginEmailPassword()
export const startLoading = () => ({ type: types.uiStartLoading });

// Remove loading inside store. Used in finishLoading()
export const finishLoading = () => ({ type: types.uiFinishLoading });
