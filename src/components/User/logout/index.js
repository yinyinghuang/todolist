import React from 'react';

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