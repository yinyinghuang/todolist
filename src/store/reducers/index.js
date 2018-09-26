import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import authUser from './authUserReducer';
import httpState from './httpStateReducer';
import todoList from './todoListReducer';
import message from './messageReducer';

const reducers = combineReducers({
	router:routerReducer,
	authUser,
	httpState,
	todoList,
	message
});

export default reducers;

