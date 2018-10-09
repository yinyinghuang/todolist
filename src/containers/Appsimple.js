import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {push,ConnectedRouter} from 'react-router-redux';
import renderRoutes from 'react-router-config/renderRoutes';

const User = (props) => {
  return (
  	<p>
  		this is user Component
    </p>
  )
}

class TestComponent extends React.PureComponent {
	handleClick(){
		this.props.pushAct('/')
		console.log('TestComponent---click')
	}
	render() {
		return (
			<div onClick={this.handleClick.bind(this)}>this is Test Component,redirect to index</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	pushAct:push
},dispatch)

const Test = connect(
	null,
	mapDispatchToProps
)(TestComponent)



const Todo = (props) => {
  return (
  	<p>
  		this is Todo Component
    </p>
  )
}

const routes = [{
	path:'/test',
	exact:true,
	component:Test
},{
	path:'/',
	exact:true,
	component:User
},{
	path:'/todo',
	exact:true,
	component:Todo
}]

const App = () => (<div>{renderRoutes(routes)}</div>)

export default App