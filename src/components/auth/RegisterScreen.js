import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { errorMessage } = useSelector((state) => state.ui);

	const [{ name, email, password, confirm_password }, handleInputChange] =
		useForm({
			name: 'Alina',
			email: 'alina@email.com',
			password: 'teamoo',
			confirm_password: 'teamoo',
		});

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startRegister(name, email, password));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!isEmail(email)) {
			dispatch(setError('Email not valid'));
			return false;
		} else if (password !== confirm_password || password.length < 5) {
			dispatch(
				setError(
					'Password should be at least 6 characters and match each other'
				)
			);
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form className="u-mb-2" onSubmit={handleRegister}>
				{errorMessage && (
					<div className="auth__alert-error">{errorMessage}</div>
				)}

				<input
					autoComplete="off"
					className="auth__input"
					name="name"
					onChange={handleInputChange}
					placeholder="Name"
					type="name"
					value={name}
				/>
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
				<input
					className="auth__input"
					name="confirm_password"
					onChange={handleInputChange}
					placeholder="Confirm password"
					type="password"
					value={confirm_password}
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
