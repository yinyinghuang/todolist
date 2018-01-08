import * as CONST from '../const';

const initialState = {
	pendding:false,
	logged:true,
	user:null
}

const loggedUserReducer = (state = initialState, action) =>{
	switch (action.type) {
		case CONST.GET_LOGGED_USER:
			return Object.assign({},state,{
				pendding:true
			});
		case CONST.SET_LOGGED_USER:
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