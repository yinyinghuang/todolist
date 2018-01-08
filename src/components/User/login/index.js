import React, {Component} from 'react';
import {authUser} from '../../../util/authUtil';

class LoginLayout extends Component{
	handleSubmit(e){
		e.preventDefault();
		const {username,password} = e.target;
		authUser({username:username.value,password:password.value});
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
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
}


export default LoginLayout;