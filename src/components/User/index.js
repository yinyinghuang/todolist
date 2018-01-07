import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,
	Switch,
	Redirect
} from 'react-router-dom';

import LoginLayout from './Login';
import LogoutLayout from './Logout';
import UserProfileLayout from './UserProfile';

class User extends Component {
	render() {
		// const {setLoggedUser} = this.props;
		return (
			<Switch>
				<Route path="/user/login" component={LoginLayout}/>
				<Route path="/user/logout" component={LogoutLayout}/>
				<Route path="/user/profile" component={UserProfileLayout}/>
				<Redirect to="/user/login" />
			</Switch>
			
		);
	}
}

export default connect()(User);