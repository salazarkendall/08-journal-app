import Swal from 'sweetalert2';

import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

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

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();
		dispatch(logout());
	};
};

export const logout = () => ({ type: types.logout });
