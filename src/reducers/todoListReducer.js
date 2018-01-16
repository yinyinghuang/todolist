import {
	CREATETODO,
	RETRIEVETODO,
	UPDATETODO,
	DELETETODO,
} from '../const';

const initialState = {
	todo:null,
	todos:null
}

const todoList = (state = initialState, action) =>{
	switch (action.type) {
		
		case CREATETODO:
			return Object.assign({},state,{
				todo:action.todo
			});
		case RETRIEVETODO:
			return Object.assign({},state,{
				todo:action.todo
			});
		default :
			return state;
	}	
}

export default todoList;