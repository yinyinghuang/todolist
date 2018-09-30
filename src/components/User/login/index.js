import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form,Loader } from 'semantic-ui-react';


import actions from '../../../store/actions/authUserAction';
import {JWT_TOKEN} from '../../../const';

class LoginLayout extends Component{
	render(){
		
			return (
				<Form>
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
	}
}
export default LoginLayout;