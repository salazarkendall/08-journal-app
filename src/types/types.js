/**
 * types
 *
 * This is a colection of types to avoid misspelling words in reducers
 */
export const types = {
	login: '[Auth] Login',
	logout: '[Auth] Logout',

	uiSetError: '[UI] Set Error',
	uiRemoveSetError: '[UI] Remove Error',

	uiStartLoading: '[UI] Start loading',
	uiFinishLoading: '[UI] Finish loading',

	noteAddNew: '[Note] New note',
	noteActive: '[Note] Set active note',
	noteLoad: '[Note] Load notes',
	noteUpdated: '[Note] Updated note',
	noteFileUrl: '[Note] Updated image url',
	noteDelete: '[Note] Delete note',
	noteLogoutCleaning: '[Note] Logout Cleaning',
};
