import React from 'react';
import {setLoggedUser} from '../../../util/authUtil';

const LogoutLayout = props => {
	const {user} = props;
	return (
		<form >
			<div>
				<label>Username:</label><span>{user ?user.name : null}</span>
			</div>
			<div>
				<button onClick={() => setLoggedUser(null)}>Logout</button>
			</div>
		</form>
	);
}


export default LogoutLayout;