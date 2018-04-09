import message from './messageAction';

import {
	PENDDING,
	FILLED,
	REJECTED
} from '../const';

const {loading,show} = message;

const penddingObj = () =>({
	type:PENDDING
});

const filledObj = (msg) =>({
	type:FILLED,
	msg
});

const rejectedObj = (errmsg) =>({
	type:REJECTED,
	errmsg
});

const pendding = () => (
	dispatch => {
		dispatch(penddingObj());
		dispatch(loading());
	}
);

const filled = (msg) => (
	dispatch => {
		dispatch(filledObj(msg));
		dispatch(show({
			type:'success',
			visible:true,
			...msg
		}));
	}
);

const rejected = (errmsg) => (
	dispatch => {
		dispatch(rejectedObj(errmsg));
		dispatch(show({
			type:'error',
			visible:true,
			...errmsg
		}));
	}
);


export default{  
	pendding,
	filled,
	rejected
}