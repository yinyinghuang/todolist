import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import fetch from 'isomorphic-fetch';

import {getLoggedUser} from '../../util/authUtil';

class TodoList extends Component {

  componentWillMount(){
    getLoggedUser();
  }

  componentDidMount({logged} = this.props) {
    if(logged){
      fetch('/todolist')
        .then(res => res.json())
        .then(res => this.setState({todos:res}))
        .catch(e => console.log(e));
    }
  }

  render() {
    const {logged} = this.props;
    return logged ?
      <div>Todo</div>
      :
      <Redirect to="/user/login"/>;
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    logged:state.loggedUserReducer.logged
  }
};

export default connect(mapStateToProps)(TodoList);
