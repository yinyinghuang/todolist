import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux'

import createMemoryHistory from 'history/createMemoryHistory';
import createBrowserHistory from 'history/createBrowserHistory';

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
const configureStore = (path='/') => {
	let initialState = {}
	let history,middleware,store
	// console.log('\n-----process.env.RUN_ENV----\n',process.env.RUN_ENV,'\n-----process.env.RUN_ENV----\n')

	switch (process.env.RUN_ENV){
		case 'server':
			history = createMemoryHistory({initialEntries:[path]})
			middleware = [logger,thunk,routerMiddleware(history)]
			store = createStore(reducers,initialState,compose(applyMiddleware(...middleware)))
			break
		default:
			initialState = window && window.__INITIAL_STATE__;
			history = createBrowserHistory()
			middleware = [logger,thunk,routerMiddleware(history)]
			store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))
			break
	}

	return {history,store}
};
export default configureStore;