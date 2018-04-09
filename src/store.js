import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = (() => {
	const middleware = [logger,thunk];

	return createStore(
		reducers,
		applyMiddleware(...middleware)
	);
})();

export default store;
