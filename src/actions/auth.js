import { types } from '../types/types';
import {
	firebase,
	googleAuthProvider,
	githubAuthProvider,
} from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(login(321, 'Fabian'));
		}, 3500);
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const startGithubLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(githubAuthProvider)
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
