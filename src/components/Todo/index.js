import React, { Component } from 'react';
import {connect} from 'react-redux';
import { renderRoutes} from 'react-router-config';

class TodoList extends Component {
  render() {
    return (<div>
    	<p>this is todo Component</p>
    	{renderRoutes(this.props.route.routes)}
    </div>)
  }
}

export default TodoList;
