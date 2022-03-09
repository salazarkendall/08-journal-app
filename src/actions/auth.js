import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(321, 'Fabian'));
		}, 3500);
	};
};

export const startGoogleLogin = () => {
	// Thunk provides dispatch by default
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});
