import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import authUserReducer from './authUserReducer';
import httpStateReducer from './httpStateReducer';

const reducers = combineReducers({
	authUserReducer,
	httpStateReducer,
	routerReducer
});

export default reducers;

