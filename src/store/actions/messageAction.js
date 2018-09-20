import {
	SHOW_MESSAGE,
	DISMISS_MESSAGE,
	LOADING
} from '../const';

const show = (msg) =>({
	type:SHOW_MESSAGE,
	...msg
});

const dismiss = () =>({
	type:DISMISS_MESSAGE
});

const loading = () =>({
	type:LOADING
});

export default{
	show,
	dismiss,
	loading
}