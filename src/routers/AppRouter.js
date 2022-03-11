import React, { useEffect, useState } from 'react';
import { AuthRouter } from './AuthRouter';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useDispatch } from 'react-redux';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return <h1>Espere...</h1>;
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
