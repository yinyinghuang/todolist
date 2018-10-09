import React from 'react';
import {render} from 'react-dom'

import {Provider,connect} from 'react-redux'
import {createStore,combineReducers,applyMiddleware,bindActionCreators} from 'redux'
import thunk from 'redux-thunk'
import {routerReducer,routerMiddleware,ConnectedRouter,push} from 'react-router-redux'

import Router from 'react-router/Router'
import createBrowserHistory from 'history/createBrowserHistory'
import renderRoutes from 'react-router-config/renderRoutes'

// import User from './components/User'
// import Todo from './components/Todo'
// import Test from './components/Test'

const reducers = combineReducers({
	router:routerReducer
})

const history = createBrowserHistory()
const initialState = window.__INITIAL_STATE__
const middlewares = [thunk,routerMiddleware(history)]
const store = createStore(reducers,initialState,applyMiddleware(...middlewares))


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

const App = (props) => {
  return (
  	<Provider store={store}>
  		<ConnectedRouter history={history}>
		    <div>{renderRoutes(routes)}</div>
		</ConnectedRouter>
    </Provider>
  )
}


render(<App/>,document.getElementById('root'))

