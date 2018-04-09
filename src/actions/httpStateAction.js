import message from './messageAction';

import {
	PENDDING,
	FILLED,
	REJECTED
} from '../const';



const pendding = () =>({
	type:PENDDING
});

const filled = (msg) =>({
	type:FILLED,
	msg
});

const rejected = (errmsg) =>({
	type:REJECTED,
	errmsg
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
					history.push(account.from.pathname);
				} else {
					dispatch(rejected(res.msg));
				}				 				
			})
			.catch(e => dispatch(rejected(e)))
	}
);


export default{
	pendding,
	filled,
	rejected
}