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
		fetch('/user/'/*,{
			method:'post',
			body:JSON.stringify(account)
		}*/)
			.then(res => res.json())
			.then(res => dispatch(setLoggedUser(res)))
			.catch(e => console.log(e))
	}
);

export default{
	getLoggedUser,
	setLoggedUser,
	authUser
}