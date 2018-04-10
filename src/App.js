import React from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Segment, Header } from 'semantic-ui-react'


import store from './store';
import TodoList from './components/Todo';
import User from './components/User';
import MessageSection from './components/MessageSection';
import history from './history';

const App = (props) => (  
    <Provider store={store}>
      <Segment>
        <Header as="h2" textAlign='center'>
          Welcome to Reac11
          <Header.Subheader textAlign='center'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Header.Subheader>
        </Header>
        <Router history={history}>
          <Switch>
            <Route path='/user' component={User} />
            <Route path='/' component={TodoList}/>
          </Switch>
        </Router>
        <MessageSection/>
      </Segment>
    </Provider>
)

export default App;
