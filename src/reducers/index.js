import {combineReducers} from 'redux';

import authUser from './authUserReducer';
import httpState from './httpStateReducer';
import todoList from './todoListReducer';
import message from './messageReducer';

const reducers = combineReducers({
	authUser,
	httpState,
	todoList,
	message
});

export default reducers;

