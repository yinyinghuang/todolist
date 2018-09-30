import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import renderRoutes from 'react-router-config/renderRoutes';

import routesConfig from '../router/routes';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {console.log('\n\n\n-----------App---------\n\n\n',this.props.user)
		// if(!this.props.user){
		// 	this.props.pushAct('/user/login');
		// }
	}

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
		pushAct:push
	},dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)
