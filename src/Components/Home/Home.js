import React, { useState } from 'react';

function Home(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	function handleUserChange(event) {
		event.preventDefault();
		setName(event.target.value);
	}
	function handleEmailChange(event) {
		event.preventDefault();
		setEmail(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h3>Username:</h3>
				<input
					id='username'
					placeholder='Username'
					type='text'
					onChange={handleUserChange}
					required
				/>
				<button type='submit'>login</button>
			</form>
		</div>
	);
}

export default Home;
