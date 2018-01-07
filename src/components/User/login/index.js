import React from 'react';

const LoginLayout = props => {

	return (
		<form >
			<div>
				<label>Username:</label>
				<input name="username" type="text" />
			</div>
			<div>
				<label>Password:</label>
				<input name="password" type="password" />
			</div>
			<div>
				<input name="submit" type="submit" value="submit" />
			</div>
		</form>
	);
}


export default LoginLayout;