import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Redirect,Route,Link,Switch } from 'react-router-dom';
import fetch from 'isomorphic-fetch';


import AddTodo from './AddTodo';
import ViewTodo from './ViewTodo';
import ListTodo from './ListTodo';

class TodoList extends Component {
  render() {
    const {user} = this.props;
    return user ?
      <div>
        Todo   
        <Switch>
          <Route path="/add" component={AddTodo} />
          <Route path="/view/:id" component={ViewTodo} />
          <Route path="/" component={ListTodo} />          
        </Switch>
      </div>

      :
      <Redirect to="/user/login"/>;
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    user:state.authUserReducer.user
  }
};

export default connect(mapStateToProps)(TodoList);
