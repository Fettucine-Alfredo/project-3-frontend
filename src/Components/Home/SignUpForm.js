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
		<div className='signup-box'>
			<h3 className='form-header'>Sign up</h3>
			<form className='form' onSubmit={handleSubmit}>
				{/* <label htmlFor='name'>Name:</label> */}
				<input
					type='text'
					name='name'
					id='name'
					className='input'
					value={formState.name}
					placeholder='Name'
					onChange={handleChange}
					required
				/>
				{/* <label htmlFor='username'>Username:</label> */}
				<input
					type='text'
					name='username'
					id='username'
					className='input'
					value={formState.username}
					placeholder='Username'
					onChange={handleChange}
					required
				/>
				{/* <label htmlFor='email'>Email:</label> */}
				<input
					type='text'
					name='email'
					id='email'
					className='input'
					value={formState.email}
					placeholder='Email'
					onChange={handleChange}
					required
				/>
				<button className='button' type='submit'>
					Sign up
				</button>
			</form>
		</div>
	);
}

export default SignUpForm;
