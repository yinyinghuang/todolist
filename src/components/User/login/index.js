import React, {Component} from 'react';
import {connect} from 'react-redux';

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
			<div className="container">
				<div className="row clearfix">
					<div className="col-md-12 column">
						<form className="form-horizontal" role="form"  onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-group">
								 <label htmlFor="inputUsername" className="col-sm-2 control-label">Username</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" id="inputUsername" name="username"/>
								</div>
							</div>
							<div className="form-group">
								 <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
								<div className="col-sm-10">
									<input type="password" className="form-control" id="inputPassword" name="password"/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
									<div className="checkbox">
										 <label><input type="checkbox" />Remember me</label>
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
									 <button type="submit" className="btn btn-default">Sign in</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	authUser:(account) => dispatch(actions.authUser(account))
})
export default connect(null,mapDispatchToProps)( LoginLayout);