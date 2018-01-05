import React, { Component } from 'react';
import { Route,
  Switch
 } from 'react-router-dom';

import TodoList from './components/Todo';
import User from './components/User';
import logo from './logo.svg';
import './App.css';
import fetch from 'isomorphic-fetch';

class App extends Component {
  // state = {
  //   todos:[]
  // }

  // componentDidMount() {
  //   fetch('/api/todolist')
  //     .then(res => res.json())
  //     .then(res => this.setState({todos:res}))
  //     .catch(e => console.log(e));
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reac11</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path='/' component={TodoList} />
        <Route path='/user' component={User} />
      </div>
    );
  }
}

export default App;
