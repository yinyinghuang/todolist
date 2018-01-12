import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

class TodoList extends Component {

  componentDidMount({user} = this.props) {
    if(user){
      fetch('/todo')
        .then(res => res.json())
        .then(res => this.setState({todos:res}))
        .catch(e => console.log(e));
    }
  }

  render() {
    const {user} = this.props;
    return user ?
      <div>Todo</div>
      :
      <Redirect to="/user/login"/>;
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    user:state.loggedUserReducer.user
  }
};

export default connect(mapStateToProps)(TodoList);
