import {
	PENDDING,
	FILLED,
	REJECTED
} from '../const';

const initialState = {
	pendding:false,
	filled:true,
	rejected:false,
	msg:null
}

const httpStateReducer = (state = initialState, action) =>{
	switch (action.type) {
		case PENDDING:
			return Object.assign({},state,{
				pendding:true,
				filled:false,
				rejected:false,
				msg:null
			});
		case FILLED:
			return Object.assign({},state,{
				pendding:false,
				filled:true,
				rejected:false,
				msg:action.msg
			});
		case REJECTED:
			return Object.assign({},state,{
				pendding:false,
				filled:true,
				rejected:true,
				msg:action.errmsg
			});
		default :
			return state;
	}	
}

export default httpStateReducer;