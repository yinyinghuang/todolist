import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import TodoList from './components/Todo';
import User from './components/User';
import logo from './logo.svg';
import './App.css';


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
        <Switch>
          <Route path='/user' component={User} />
          <Route path='/' component={TodoList}/>
        </Switch>
      </div>
    </Provider>
)

export default App;
