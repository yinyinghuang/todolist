import {push} from 'react-router-redux';
import {
	pendding,
	filled,
	rejected
} from './httpStateAction';

import {
	SET_LOGGED_USER
} from '../const';

const setLoggedUser = (userInfo) =>({
	type:SET_LOGGED_USER,
	userInfo
});

const authUser = account => (
	dispatch => {

		//切换app状态为pedding
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
					dispatch(push('/'));
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