import React, { Component } from 'react';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';

class User extends Component {
	render() {
		return (
			<div>
				{renderRoutes(this.props.route.routes)}
			</div>			
		);
	}
}

export default User;