import React from 'react';
import {render} from 'react-dom'

import {Provider,connect} from 'react-redux'
import {createStore,combineReducers,applyMiddleware,bindActionCreators} from 'redux'
import thunk from 'redux-thunk'
import {routerReducer,routerMiddleware,ConnectedRouter,push} from 'react-router-redux'

import Router from 'react-router/Router'
import createBrowserHistory from 'history/createBrowserHistory'
import renderRoutes from 'react-router-config/renderRoutes'

import routesConfig from './router/routes'
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


const App = (props) => {
  return (
  	<Provider store={store}>
  		<ConnectedRouter history={history}>
		    <div>{renderRoutes(routesConfig)}</div>
		</ConnectedRouter>
    </Provider>
  )
}


render(<App/>,document.getElementById('root'))

