import React from 'react';
import {render,hydrate} from 'react-dom'

import routesConfig from './router/routes'
import createApp from './app/createApp'
import configureStore from './store/configureStore'
import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'
import registerServiceWorker from './registerServiceWorker'
import history from './history'
// const history = createBrowserHistory()
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

const app = createApp({store,history})
hydrate(app,document.getElementById('root'))
console.log(process.env.NODE_ENV,'--------index------\n')


registerServiceWorker();