import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
	const [name, setName] = useState('');
	let navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate(`/user/${name}`, { replace: true });
	}

	function handleUserChange(event) {
		event.preventDefault();
		setName(event.target.value);
	}

	function signUp(event) {
		event.preventDefault();
		navigate('/signup');
	}

	return (
		<div className='login-box'>
			<h3 className='form-header'>Sign In</h3>
			<form className='form' onSubmit={handleSubmit}>
				<input
					id='username'
					className='input'
					placeholder='Username'
					type='text'
					onChange={handleUserChange}
					required
				/>
				<button className='button login-form-buttons' type='submit'>
					Login
				</button>
				<button className='button login-form-buttons' onClick={signUp}>
					Sign up
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
