import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter'
import {push,replace} from 'react-router-redux';
import renderRoutes from 'react-router-config/renderRoutes';

import routesConfig from '../router/routes';

class App extends React.Component {
	// componentDidMount() {
		
	// 	if(!this.props.user){
	// 		this.props.replaceAct('/user/login');
	// 	}
	// }

	render() {
		return (<div>
			<div>whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div>
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