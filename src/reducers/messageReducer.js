import {
	DISMISS_MESSAGE,
	SHOW_MESSAGE,
	LOADING
} from '../const';

const initialState = {
	visible:false,
	type:null,
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
				visible:true
			});
		case SHOW_MESSAGE:
			return Object.assign({},state,{
				visible:action.visible
				type:action.type,
				header:action.header,
				content:action.content,
				list:action.list
			});
		default :
			return state;
	}	
}

export default message;