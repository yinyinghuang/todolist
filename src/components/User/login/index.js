import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react';


import actions from '../../../actions/authUserAction';

class LoginLayout extends Component{
	handleSubmit(e){
		e.preventDefault();
		const {username,password} = e.target;
		const {location,authUser} = this.props;
		const {from} = location.state || {from :{pathname:'/'}};
		authUser({username:username.value,password:password.value,from:from});
	}

	render(){
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
	}
}

const mapDispatchToProps = dispatch => ({
	authUser:(account) => dispatch(actions.authUser(account))
})
export default connect(null,mapDispatchToProps)( LoginLayout);