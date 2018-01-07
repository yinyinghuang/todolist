import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
// import fetch from 'isomorphic-fetch';

import {GET_LOGGED_USER} from '../../const';

class TodoList extends Component {

  componentWillMount({getLoggedUser} = this.props){
    getLoggedUser();
  }

  // componentDidMount() {
  //   fetch('/api/todolist')
  //     .then(res => res.json())
  //     .then(res => this.setState({todos:res}))
  //     .catch(e => console.log(e));
  // }

  render({logged} = this.props) {
    return logged ?
      this.state.todos.map(item => (<p key={item.id}>{item.todo}</p>))
      :
      <Redirect to="/user/login"/>;
  }
}

const mapStateToProps = (state,ownProps) => ({
  logged:state.logged
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getLoggedUser:() => dispatch({type:GET_LOGGED_USER})
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
