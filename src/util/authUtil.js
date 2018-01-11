import store from '../store';
import actions from '../actions';

export const getLoggedUser = () =>{
	
	store.dispatch(actions.getLoggedUser());
}

export const setLoggedUser = (userInfo) =>{
	store.dispatch(actions.setLoggedUser(userInfo));
}

export const authUser = (account) =>{
	store.dispatch(actions.authUser(account));
}

