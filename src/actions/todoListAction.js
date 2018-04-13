
import httpState from './httpStateAction';

import {
	CREATETODO,
	RETRIEVETODO,
	UPDATETODO,
	DELETETODO,
	JWT_TOKEN
} from '../const';

const {pendding,filled,rejected} = httpState;


const createTodo = (todo) => (dispatch,getState) => {
	dispatch(pendding());
	const userId = getState().authUser.user._id;
	
	const token = localStorage.getItem(JWT_TOKEN);
	const headers = {
		'Content-type':'application/json',
		'Authorization':'Bearer ' + token
	}

	fetch('/todo/create',{
		method:'post',
		headers,
		body:JSON.stringify({...todo,userId})
	})
		.then(res => res.json())
		.then(res => {
			if(res.success){  
				dispatch(filled(res.msg));
				dispatch(getListTodo(userId));
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
	
	const token = localStorage.getItem(JWT_TOKEN);
	const headers = {
		'Content-type':'application/json',
		'Authorization':'Bearer ' + token
	}
	await fetch(`/todo/retrieve/${userId}`,{
		method:'get',
		accpets:'json',
		headers
	})
		.then(res => res.json())
		.then(res => {
			if(res.success){  
				dispatch(retrieveTodo(res.todo));
			}else {
				dispatch(rejected(res.msg));
			}
		})
		.catch(res => {console.log(res)
			dispatch(rejected(res));
		})
}

export default{
	createTodo,
	updateTodo,
	deleteTodo,
	getListTodo
}