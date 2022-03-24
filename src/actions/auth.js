import Swal from 'sweetalert2';
import { finishLoading, startLoading } from './ui';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { purgeNotesLogout } from './notes';

// Set a user inside the store
export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

// Remove user from the store
export const logout = () => ({ type: types.logout });

// Creates a new user authenticated via Firebase and set it's displayName to the specified name
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

// Logs in a user into Firebase using Email and Password
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

// Logs in a user into Firebase using Google Sign In
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

// Logs out the user from Firebase, regardless its login method
export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();
		dispatch(logout());
		dispatch(purgeNotesLogout());
	};
};
