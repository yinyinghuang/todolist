import React from 'react';

const LogoutLayout = props => {
	const {user} = props;
	return (
		<form >
			<div>
				<label>Username:</label><span>{user ?user.name : null}</span>
			</div>
			<div>
				<button>Logout</button>
			</div>
		</form>
	);
}


export default LogoutLayout;