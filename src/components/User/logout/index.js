import React from 'react';
import {setLoggedUser} from '../../../util/authUtil';

const LogoutLayout = props => {
	return (
		<form >
			<div>
				<button onClick={() => setLoggedUser(null)}>Logout</button>
			</div>
		</form>
	);
}



export default LogoutLayout;