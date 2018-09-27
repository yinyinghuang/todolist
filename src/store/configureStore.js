import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux'

import history from '../history';

const configureStore = (initialState) => {
	const middleware = [logger,thunk,routerMiddleware(history)];

	return createStore(
		reducers,
		initialState,
		applyMiddleware(...middleware)
	);
};

export default configureStore;