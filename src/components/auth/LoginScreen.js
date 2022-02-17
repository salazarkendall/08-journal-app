import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	startGithubLogin,
	startGoogleLogin,
	startLoginEmailPassword,
} from '../../actions/auth';
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

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	const handleGithubLogin = () => dispatch(startGithubLogin());

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
				<div
					className="auth-btn btn-auth-github"
					onClick={handleGithubLogin}
				>
					<div className="auth-icon-wrapper">
						<img
							className="auth-icon"
							src="https://raw.githubusercontent.com/gilbarbara/logos/9f0858601cc8543b51c8eea0722dbab4a7c7a1f9/logos/github-icon.svg"
							alt="google button"
						/>
					</div>
					<p className="btn-text">
						<b>Sign in with GitHub</b>
					</p>
				</div>
			</div>
			<Link to="/auth/register" className="link">
				Create new account
			</Link>
		</>
	);
};
