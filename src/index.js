
import {hydrate} from 'react-dom';
import app from './app/index'

// import registerServiceWorker from './registerServiceWorker';


const {createApp,configureStore} = app;
// console.log('\n-----process.env.RUN_ENV----\n',process.env.RUN_ENV,'\n-----process.env.RUN_ENV----\n')

let {store,history} = configureStore()

const renderApp = () => {
	let application = createApp({store,history});
	hydrate(application,document.getElementById('root'))
}
renderApp()
// window.main = () => {
//   renderApp()
// };

// console.log('\n------window.main----\n',window.main,'\n------window.main----\n')
// registerServiceWorker();
