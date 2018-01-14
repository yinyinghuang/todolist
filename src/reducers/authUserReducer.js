import {
	SET_LOGGED_USER
} from '../const';

const initialState = {
	user:false
}

const authUserReducer = (state = initialState, action) =>{
	switch (action.type) {
		
		case SET_LOGGED_USER:
			return Object.assign({},state,{
				user:action.userInfo
			});
		default :
			return state;
	}	
}

export default authUserReducer;