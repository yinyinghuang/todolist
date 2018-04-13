import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect,Route,Switch} from 'react-router-dom';


import AddTodo from './AddTodo';
import ViewTodo from './ViewTodo';
import ListTodo from './ListTodo';

class TodoList extends Component {
  render() {
    const {user,location} = this.props;
    const token = localStorage.getItem('UNA_FULL_STACK_TOKEN');
    return token ?
      <div>
        <Switch>
          <Route path="/add" component={AddTodo} />
          <Route path="/view/:id" component={ViewTodo} />
          <Route path="/" component={ListTodo} />          
        </Switch>
      </div>

      :
      <Redirect to={{
        pathname:"/user/login",
        state:{from:location}
      }}/>;
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    user:state.authUser.user
  }
};

export default connect(mapStateToProps)(TodoList);
