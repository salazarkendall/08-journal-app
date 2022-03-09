import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const [{ name, email, password, confirm_password }, handleInputChange] =
		useForm({
			name: 'Alina',
			email: 'alina@email.com',
			password: 'teamo',
			confirm_password: 'teamo',
		});

	const handleRegister = (e) => {
		e.preventDefault();
		console.table({ name, email, password, confirm_password });
	};

	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form className="u-mb-2" onSubmit={handleRegister}>
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
