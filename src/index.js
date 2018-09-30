
import {hydrate} from 'react-dom';
import history from './history';
import app from './app/index'

import registerServiceWorker from './registerServiceWorker';


const {createApp,configureStore} = app;
const initialState = window && window.__INITIAL_STATE__;
let store = configureStore(initialState)
console.log(store)
const renderApp = () => {
	let application = createApp({store,history});
	hydrate(application,document.getElementById('root'))
}
renderApp()
// window.main = () => {
//   renderApp()
// };

// console.log('\n------window.main----\n',window.main,'\n------window.main----\n')
registerServiceWorker();
