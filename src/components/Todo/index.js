import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class TodoList extends Component {
  state = {
    todos:[]
  }

  componentDidMount() {
    fetch('/api/todolist')
      .then(res => res.json())
      .then(res => this.setState({todos:res}))
      .catch(e => console.log(e));
  }

  render() {
    return this.state.todos.map(item => (<p key={item.id}>{item.todo}</p>));
  }
}

export default TodoList;
