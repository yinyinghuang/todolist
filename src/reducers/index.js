import {combineReducers} from 'redux';

import authUser from './authUserReducer';
import httpState from './httpStateReducer';
import todoList from './todoListReducer';

const reducers = combineReducers({
	authUser,
	httpState,
	todoList
});

export default reducers;

