import * as CONST from '../const';

const initialState = {
	pendding:true,
	logged:true,
	user:null
}

const loggedUserReducer = (state = initialState, action) =>{
	if(action.type === CONST.GET_LOGGED_USER){
		return Object.assign({},state,{
			pendding:false
		})
	} else if(action.type === CONST.SET_LOGGED_USER){
		return Object.assign({},state,{
			pendding:false,
			logged:action.logged
		})
	}

	return state;
}

export default loggedUserReducer;