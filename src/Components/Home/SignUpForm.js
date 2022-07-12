import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../Constants';
import axios from 'axios';

function SignUpForm(props) {
	const initialFormState = { name: '', username: '', email: '' };
	const [formState, setFormState] = useState(initialFormState);
	let navigate = useNavigate();
	const url = `${config.API_URL}/user/`;

	function handleSubmit(event) {
		event.preventDefault();
		navigate(`/user/${formState.username}`, { replace: true });
		axios
			.post(url, formState)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	function handleChange(event) {
		event.preventDefault();
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					id='name'
					value={formState.name}
					placeholder='name'
					onChange={handleChange}
					required
				/>
				<label htmlFor='username'>Username:</label>
				<input
					type='text'
					name='username'
					id='username'
					value={formState.username}
					placeholder='username'
					onChange={handleChange}
					required
				/>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					name='email'
					id='email'
					value={formState.email}
					placeholder='email'
					onChange={handleChange}
					required
				/>
				<button type='submit'>Sign up</button>
			</form>
		</div>
	);
}

export default SignUpForm;
