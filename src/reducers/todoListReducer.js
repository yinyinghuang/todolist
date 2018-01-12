import {
	CREATETODO,
	RETRIEVETODO,
	UPDATETODO,
	DELETETODO,
} from '../const';

const initialState = {
	todo:null
}

const todoListReducer = (state = initialState, action) =>{
	switch (action.type) {
		
		case CREATETODO:
			return Object.assign({},state,{
				todo:action.todo
			});
		default :
			return state;
	}	
}

export default todoListReducer;