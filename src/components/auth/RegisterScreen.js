import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form className="u-mb-2">
				<input
					className="auth__input"
					type="name"
					placeholder="Name"
					name="name"
					autoComplete="off"
				/>
				<input
					className="auth__input"
					type="email"
					placeholder="Email"
					name="email"
					autoComplete="off"
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Confirm password"
					name="confirm_password"
				/>
				<button
					className="btn btn-primary btn-block"
					type="submit"
					// disabled={true}
				>
					Login
				</button>
			</form>

			<Link to="/auth/login" className="link">
				Already register?
			</Link>
		</>
	);
};
