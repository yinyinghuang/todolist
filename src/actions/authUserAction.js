import {push} from 'react-router-redux';
import httpState from './httpStateAction';

import {
	SET_LOGGED_USER
} from '../const';

const {pendding,filled,rejected} = httpState;

const setLoggedUser = (userInfo) =>({
	type:SET_LOGGED_USER,
	userInfo
});

const authUser = account => (
	dispatch => {
		dispatch(pendding());

		fetch('/user/login',{
			method:'post',
			headers:{'Content-type':'application/json'},
			body:JSON.stringify(account)
		})
			.then(res => res.json())
			.then(res => {
				if(res.success){
					dispatch(setLoggedUser(res.user));
					dispatch(filled(res.msg));
					dispatch(push(account.from.pathname));
				} else {
					dispatch(rejected(res.msg));
				}				 				
			})
			.catch(e => dispatch(rejected(e)))
	}
);

export default{
	setLoggedUser,
	authUser
}