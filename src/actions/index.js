import {GET_LOGGED_USER,SET_LOGGED_USER} from '../const';

const getLoggedUser = () =>({
	type:GET_LOGGED_USER
});

const setLoggedUser = (userInfo) =>({
	type:SET_LOGGED_USER,
	userInfo
});

const authUser = account => (
	dispatch => {
		fetch('/user/login',{
			method:'post',
			headers:{'Content-type':'application/json'},
			body:JSON.stringify(account)
		})
			.then(res => res.json())
			.then(res => {
				dispatch(setLoggedUser(res));
				window.history.pushState(null,null,'/');
			})
			.catch(e => console.log(e))
	}
);

export default{
	getLoggedUser,
	setLoggedUser,
	authUser
}