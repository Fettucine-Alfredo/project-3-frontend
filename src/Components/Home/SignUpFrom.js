import React from 'react';

function SignUpFrom(props) {
	return (
		<div>
			<form>
                <label>Username</label>
                <input type="text" placeholder='username' required/>
				<label>email</label>
				<input type='email' placeholder='email' required />
                <p></p>
			</form>
		</div>
	);
}

export default SignUpFrom;
