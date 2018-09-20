import {
	DISMISS_MESSAGE,
	SHOW_MESSAGE,
	LOADING
} from '../const';

const initialState = {
	visible:false,
	error:false,
	success:false,
	header:null,
	content:null,
	list:null
}

const message = (state = initialState, action) =>{
	switch (action.type) {
		
		case LOADING:
			return Object.assign({},state,{
				visible:false
			});
		case DISMISS_MESSAGE:
			return Object.assign({},state,{
				visible:false
			});
		case SHOW_MESSAGE:
			return Object.assign({},state,{
				visible:true,
				error:action.error,
				success:action.success,
				header:action.header,
				content:action.content,
				list:action.list
			});
		default :
			return state;
	}	
}

export default message;