import {
	SET_LOGGED_USER
} from '../const';

const initialState = {
	user:false,
	redirectUrl:null
}

const authUser = (state = initialState, action) =>{
	switch (action.type) {
		
		case SET_LOGGED_USER:
			return Object.assign({},state,{
				user:action.userInfo
			});
		default :
			return state;
	}	
}

export default authUser;