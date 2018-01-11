import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import loggedUserReducer from './loggedUserReducer';
import httpStateReducer from './httpStateReducer';

const reducers = combineReducers({
	loggedUserReducer,
	httpStateReducer,
	routerReducer
});

export default reducers;

