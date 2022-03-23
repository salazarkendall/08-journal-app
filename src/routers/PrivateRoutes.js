import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

/**
 * PrivateRoutes.
 *
 * This will validate if the user is authenticated.
 * Will return based on that validation.
 *
 * @param isAuthenticated boolean
 * @param component Higher Order Component
 * @returns JournalScreen if authenticated, otherwise AuthRouter
 */
export const PrivateRoutes = ({
	isAuthenticated,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to="/auth/login" />
				)
			}
		/>
	);
};
