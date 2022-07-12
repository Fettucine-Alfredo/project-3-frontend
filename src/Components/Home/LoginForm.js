import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	let navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate(`/user/${name}`, { replace: true });
	}

	function handleUserChange(event) {
		event.preventDefault();
		setName(event.target.value);
	}

	return (
		<div className='login-box'>
			<h3>Username:</h3>
			<form onSubmit={handleSubmit}>
				<input
					id='username'
					placeholder='Username'
					type='text'
					onChange={handleUserChange}
					required
				/>
				<button type='submit'>login</button>
                <p>Click here to Sign up</p>
			</form>
		</div>
	);
}

export default LoginForm;
