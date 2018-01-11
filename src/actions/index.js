import {push} from 'react-router-redux';

import httpState from './httpStateAction';
import authUser from './authUserAction';


export default{
	...httpState,
	...authUser
}