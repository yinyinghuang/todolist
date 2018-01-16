import {push} from 'react-router-redux';
import httpState from './httpStateAction';

import {
	CREATETODO,
	RETRIEVETODO,
	UPDATETODO,
	DELETETODO,
} from '../const';

const {pendding,filled,rejected} = httpState;

const createTodo = (todo) => (dispatch,getState) => {
	dispatch(pendding());
	const userId = getState().authUser.user._id;
	fetch('/todo/create',{
		method:'post',
		headers:{'Content-type':'application/json'},
		body:JSON.stringify({...todo,userId})
	})
		.then(res => res.json())
		.then(res => {
			if(res.success){  
				dispatch(filled('The item has been saved'));
				dispatch(push('/todo'));
			}else {
				dispatch(rejected(res.msg));
			}
		})
		.catch(res => {
			dispatch(rejected(res));
		})
};

const retrieveTodo = (todo) => ({
	type:RETRIEVETODO,
	todo
});

const updateTodo = (_id) => ({
	type:UPDATETODO,
	_id
});

const deleteTodo = (condition) => ({
	type:DELETETODO,
	condition
});

const getListTodo = (userId) => async(dispatch) => {

	dispatch(pendding());
	
	await fetch(`/todo/retrieve/${userId}`,{
		method:'get',
		accpets:'json'
	})
		.then(res => res.json())
		.then(res => {
			if(res.success){  
				dispatch(filled(''));
				dispatch(retrieveTodo(res.todo));
			}else {
				dispatch(rejected(res.msg));
			}
		})
		.catch(res => {
			dispatch(rejected(res));
		})
}

export default{
	createTodo,
	updateTodo,
	deleteTodo,
	getListTodo
}