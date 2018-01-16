import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import authUser from './authUserReducer';
import httpState from './httpStateReducer';
import todoList from './todoListReducer';

const reducers = combineReducers({
	authUser,
	httpState,
	todoList,
	routerReducer
});

export default reducers;

