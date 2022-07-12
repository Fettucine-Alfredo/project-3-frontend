import React from 'react';
import LoginForm from './LoginForm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

function Home(props) {
	const [showSignUp, setShowSignUp] = useState(false);
	if (showSignUp) {
		return (
			<div>
				<SignUpForm />
			</div>
		);
	}
	return (
		<div>
			<LoginForm />
			<button
				onClick={() => {
					setShowSignUp(true);
				}}>
				Sign up
			</button>
		</div>
	);
}

export default Home;
