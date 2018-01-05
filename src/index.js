import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './components/Todo';
import User from './components/User';
import {
	BrowserRouter as Router,
	IndexRoute,
	Route} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

console.log(TodoList);

ReactDOM.render(
	<Router>
		<Route path='/' component={App}>
			<IndexRoute component={TodoList}/>
			<Route path='user' component={User}/>
		</Route>
	</Router>, 
	document.getElementById('root')
);
registerServiceWorker();
