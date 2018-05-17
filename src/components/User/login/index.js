import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form,Loader } from 'semantic-ui-react';


import actions from '../../../actions/authUserAction';
import {JWT_TOKEN} from '../../../const';

class LoginLayout extends Component{
	componentWillMount(){
		const token = localStorage.getItem(JWT_TOKEN);
		if (token)  this._res = this.props.verify(token);
	}

	handleSubmit(e){
		e.preventDefault();
		const {username,password} = e.target;
		const {location,authUser} = this.props;
		const {from} = location.state || {from :{pathname:'/'}};
		
		authUser({username:username.value,password:password.value,from:from});
	}

	render(){
		if (!this._res) {
			return (
				<Form onSubmit={this.handleSubmit.bind(this)}>
				    <Form.Field>
				      <label>Username</label>
				      <input placeholder='Username' name='username'/>
				    </Form.Field>
				    <Form.Field>
				      <label>Password</label>
				      <input placeholder='Password' name='password'/>
				    </Form.Field>
				    <Button type='submit'>Submit</Button>
			    </Form>
			);
		} else{
			return (
				<Loader/>
			);
		}
	}
}

const mapDispatchToProps = dispatch => ({
	authUser:(account) => dispatch(actions.authUser(account)),
	verify:(token) => dispatch(actions.verify(token))
})
export default connect(null,mapDispatchToProps)( LoginLayout);