import {
	SHOW_MESSAGE,
	DISMISS_MESSAGE
} from '../const';

const show = (msg) =>({
	type:SHOW_MESSAGE,
	...msg
});

const dismiss = () =>({
	type:DISMISS_MESSAGE,
	visible:false
});

export default{
	show,
	dismiss
}