
// import {hydrate} from 'react-dom';
// import app from './app/index'

// // import registerServiceWorker from './registerServiceWorker';


// const {createApp,configureStore} = app;
// // console.log('\n-----process.env.RUN_ENV----\n',process.env.RUN_ENV,'\n-----process.env.RUN_ENV----\n')

// let {store,history} = configureStore()

// const renderApp = () => {
// 	let application = createApp({store,history});
// 	hydrate(application,document.getElementById('root'))
// }
// renderApp()
// // window.main = () => {
// //   renderApp()
// // };


// // registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme,MuiThemeProvider,withStyles} from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple'
import CssBaseline from '@material-ui/core/CssBaseline'
import SimpleModalWrapped from './Test.js'
const styles = theme => ({
	icon:{
		color:theme.palette.primary
	}
})

const theme = createMuiTheme({
	typography: {
	    useNextVariants: true,
	  },
	palette: {
	    primary: purple,
	    secondary: {
	      main: '#f44336',
	    },
	  },
})

function App() {
  
  return (
  	<div>
  		<CssBaseline/>
	    <SimpleModalWrapped/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
