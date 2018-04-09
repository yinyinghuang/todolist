import React from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import {ConnectedRouter} from 'react-router-redux';


import store from './store';
import TodoList from './components/Todo';
import User from './components/User';
import MessageSection from './components/MessageSection';
import logo from './logo.svg';
import './App.css';
import history from './history';

const App = (props) => (  
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reac11</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router history={history}>
          <Switch>
            <Route path='/user' component={User} />
            <Route path='/' component={TodoList}/>
          </Switch>
        </Router>
        <MessageSection/>
      </div>
    </Provider>
)

export default App;
