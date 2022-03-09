import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [{ email, password }, handleInputChange] = useForm({
		email: 'kendall@gmail.com',
		password: '1234',
	});

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => dispatch(startGoogleLogin());

	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form onSubmit={handleLogin}>
				<input
					autoComplete="off"
					className="auth__input"
					name="email"
					onChange={handleInputChange}
					placeholder="Email"
					type="email"
					value={email}
				/>
				<input
					className="auth__input"
					name="password"
					onChange={handleInputChange}
					placeholder="Password"
					type="password"
					value={password}
				/>
				<button
					className="btn btn-primary btn-block"
					type="submit"
					// disabled={true}
				>
					Login
				</button>
			</form>
			<div className="auth__social-networks">
				<p>Login with social networks:</p>
				<div
					className="auth-btn btn-auth-google"
					onClick={handleGoogleLogin}
				>
					<div className="auth-icon-wrapper">
						<img
							className="auth-icon"
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
							alt="google button"
						/>
					</div>
					<p className="btn-text">
						<b>Sign in with Google</b>
					</p>
				</div>
			</div>
			<Link to="/auth/register" className="link">
				Create new account
			</Link>
		</>
	);
};
