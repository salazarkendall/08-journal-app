import React, { useEffect, useState } from 'react';
import { AuthRouter } from './AuthRouter';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useDispatch } from 'react-redux';

/**
 * Main AppRouter.
 *
 * This router has an auth state observer.
 * It is looking for auth changes to set a different isLoggedIn state.
 * This will validate public and private routes.
 *
 * @returns Router with public and private routes.
 */
export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true); // <- Works as an interrupt while loading
	const [isLoggedIn, setIsLoggedIn] = useState(false); // <- Session will always be logged out by default

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false); // <- Whatever the result is, this will set checking to false
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return <h1>Please, wait...</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoutes
						path="/auth"
						isAuthenticated={isLoggedIn}
						component={AuthRouter}
					/>
					<PrivateRoutes
						exact
						isAuthenticated={isLoggedIn}
						path="/"
						component={JournalScreen}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
