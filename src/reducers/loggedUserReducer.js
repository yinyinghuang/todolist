import {
	SET_LOGGED_USER
} from '../const';

const initialState = {
	user:null
}

const loggedUserReducer = (state = initialState, action) =>{
	switch (action.type) {
		
		case SET_LOGGED_USER:
			return Object.assign({},state,{
				pendding:false,
				logged:action.userInfo ? true : false,
				user:action.userInfo
			});
		default :
			return state;
	}	
}

export default loggedUserReducer;