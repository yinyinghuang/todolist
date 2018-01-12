import httpState from './httpStateAction';
import authUser from './authUserAction';


export default{
	...httpState,
	...authUser
}