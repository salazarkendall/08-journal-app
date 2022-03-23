import Swal from 'sweetalert2';
import { finishLoading, startLoading } from './ui';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

// ---> Don't use these inside dispatch() <---

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const logout = () => ({ type: types.logout });

// ---> Use this functions inside dispatch() <---

/**
 * Creates a new user authenticated via Firebase and set it's displayName to the specified name
 * Remember: thunk provides a default dispatch inside the returned callBack
 */
export const startRegister = (name, email, password) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(login(user.uid, user.displayName));
				console.log(user);
			})
			.catch((e) => {
				Swal.fire({
					title: 'Error',
					html: e.message,
					icon: 'error',
				});
			});
	};
};

/**
 * Logs in a user
 */
export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((e) => {
				Swal.fire('Error', e.message, 'error');
				dispatch(finishLoading());
			});
	};
};

/**
 * Logs in a user using google sign in method
 */
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

/**
 * Logs out the user, regardless its login method
 */
export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();
		dispatch(logout());
	};
};
