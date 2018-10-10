import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {push,replace} from 'react-router-redux';
import renderRoutes from 'react-router-config/renderRoutes';

import routesConfig from '../router/routes';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillUpdate(nextProps, nextState) {
		alert('componentWillUpdate')
	}
	componentDidUpdate(prevProps, prevState) {
		alert('componentDidUpdate')
	}
	componentWillReceiveProps(nextProps) {
		console.log('----------componentWillReceiveProps------\n',nextProps)
	}

	componentDidMount() {
		console.log('\n\n\n-----------App---------\n\n\n',this.props.user)
		if(!this.props.user){
			this.props.replaceAct('/user/login');
		}
	}
	handleClick(){
		this.props.replaceAct('/test');
	}

	render() {
		return (<div>
			<div>whyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div>
			<div>{renderRoutes(routesConfig)}</div>
			<div onClick={this.handleClick.bind(this)}>redirect button</div>
		</div>);
	}
}


const mapStateToProps = (state) => ({	
	user:state.authUser.user	
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
		replaceAct:replace
	},dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)
// export default App