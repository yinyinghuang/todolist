import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const store = ((history) => {
	const middleware = [logger,thunk,routerMiddleware(history)];

	return createStore(
		reducers,
		applyMiddleware(...middleware)
	);
})(history);

store.history = history;

export default store;
