import {
	PENDDING,
	FILLED,
	REJECTED
} from '../const';



const pendding = () =>({
	type:PENDDING
});

const filled = (msg) =>({
	type:FILLED,
	msg
});

const rejected = (errmsg) =>({
	type:REJECTED,
	errmsg
});

export default{
	pendding,
	filled,
	rejected
}