
import history from '../../history';
import message from './messageAction';

import {
	PENDDING,
	FILLED,
	REJECTED
} from '../const';

const {loading,show,dismiss} = message;

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
		// dispatch(loading());
	}
);

const filled = (msg) => (		
	dispatch => {
		dispatch(filledObj(msg));
		dispatch(show({
			error:false,
			success:true,
			visible:true,
			...msg
		}));
	}
);

const rejected = (msg) => (
	dispatch => {
		dispatch(rejectedObj(msg));
		dispatch(show({
			error:true,
			success:false,
			visible:true,
			...msg
		}));
		if (msg.redirect_url) {
			setTimeout(function function_name(argument) {
				history.push(msg.redirect_url);
				dispatch(dismiss());
			},2000)
		}
		return false;
	}
);


export default{  
	pendding,
	filled,
	rejected
}