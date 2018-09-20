import TodoList from '../../components/Todo'
import ListTodo from '../../components/Todo/ListTodo'
import AddTodo from '../../components/Todo/AddTodo'
import ViewTodo from '../../components/Todo/ViewTodo'

import User from '../../components/User'
import Login from '../../components/User/Login'
import Logout from '../../components/User/Logout'


const routersConfig = [{
	path:'/',
	exact:true,
	component:TodoList,
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
	component:User,
	routes:[{
		path:'/login',
		component:Login,
	},{
		path:'logout',
		component:Logout
	}]
}];
export default routersConfig;