import React from 'react'
import Loadable from 'react-loadable'

// import TodoList from '../components/Todo'
import ListTodo from '../components/Todo/ListTodo'
import AddTodo from '../components/Todo/AddTodo'
import ViewTodo from '../components/Todo/ViewTodo'

import User from '../components/User'
import Login from '../components/User/Login'
import Logout from '../components/User/Logout'

// import Test from '../components/Test'

const Loading = () => {
	console.log('loading~~~~~~~~~~~~~~~~~~',Date())
	return <div>loadingggggggggggggggggg</div>
}

const LoadableTodoList = Loadable({
	loader:() => import('../components/Todo'),
	loading:Loading
})

const LoadableTest = Loadable({
	loader:() => import('../components/Test'),
	loading:Loading
})

const LoadableUser = Loadable({
	loader:() => import('../components/User'),
	loading:Loading
})

const routesConfig = [{
	path:'/',
	exact:true,
	component:LoadableTodoList,
	routes:[{
		path:'/',
		component:ListTodo,
},{
		path:'/add',
		component:AddTodo, 
	},{
		path:'/view/:id',
		component:ViewTodo,
	}]
},{
	path:'/user',
	component:LoadableUser,
	routes:[{
		path:'/user/login',
	    exact:true,
		component:Login,
	},{
		path:'/user/logout',
	    exact:true,
		component:Logout
	}]
},{
	path:'/test',
	component:LoadableTest
}];


// const routesConfig = [{
// 	path:'/',
// 	exact:true,
// 	component:TodoList,
// 	routes:[{
// 		path:'/',
// 		component:ListTodo,
// },{
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



export default routesConfig;