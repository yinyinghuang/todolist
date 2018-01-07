import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import TodoList from './components/Todo';
import User from './components/User';
import logo from './logo.svg';
import './App.css';

const store = createStore(reducers);

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
