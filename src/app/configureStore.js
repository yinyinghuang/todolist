import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../store/reducers';

const configureStore = (initialState) => {
	const middleware = [logger,thunk];

	return createStore(
		reducers,
		initialState,
		applyMiddleware(...middleware)
	);
};

export default configureStore;