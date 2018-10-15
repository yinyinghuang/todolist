import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter'
import {replace} from 'react-router-redux';
import renderRoutes from 'react-router-config/renderRoutes';

import routesConfig from '../router/routes';

class App extends React.Component {
	// componentDidMount() {
	// 	const regBlackList = /^(\/user\/(login|logout))/i
	// 	const {user,location:{pathname}} = this.props
	// 	if(!user && !regBlackList.test(pathname)){
	// 		this.props.replaceAct(`/user/login?redirect=${this.props.location.pathname}`);
	// 	}
	// }

	render() {
		return (<div>
			<div>{renderRoutes(routesConfig)}</div>
		</div>);
	}
}


const mapStateToProps = (state) => ({	
	user:state.authUser.user	
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
		replaceAct:replace
	},dispatch)


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(App))
// export default App