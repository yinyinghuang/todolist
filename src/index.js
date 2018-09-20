import React from 'react';
import {render,hydrate} from 'react-dom';

import history from './history';
import app from './app/index'

import registerServiceWorker from './registerServiceWorker';

const {createApp,configureStore} = app;
const initialState = window && window.__INITIAL_STATE__;
let store = configureStore(initialState)
const renderApp = () => {
	let application = createApp({store,history});
	hydrate(application,document.getElementById('root'))
}

renderApp();
 
registerServiceWorker();
