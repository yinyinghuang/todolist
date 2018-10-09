// import TodoList from '../components/Todo'
// import ListTodo from '../components/Todo/ListTodo'
// import AddTodo from '../components/Todo/AddTodo'
// import ViewTodo from '../components/Todo/ViewTodo'

// import User from '../components/User'
// import Login from '../components/User/Login'
// import Logout from '../components/User/Logout'

// import Test from '../components/Test'


// const routesConfig = [{
// 	path:'/',
// 	exact:true,
// 	component:TodoList,
// 	routes:[{
// 		path:'/',
// 		component:ListTodo,
// 	},{
// 		path:'/add',
// 		component:AddTodo, 
// 	},{
// 		path:'/view/:id',
// 		component:ViewTodo,
// 	}]
// },{
// 	path:'/user',
// 	component:User,
// 	routes:[{
// 		path:'/user/login',
// 	    exact:true,
// 		component:Login,
// 	},{
// 		path:'/user/logout',
// 	    exact:true,
// 		component:Logout
// 	}]
// },{
// 	path:'/test',
// 	component:Test
// }];



import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

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

const routesConfig = [{
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


export default routesConfig;