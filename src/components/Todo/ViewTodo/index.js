import React,{Component} from 'react';
import {connect} from 'react-redux';

import todoListAction from '../../../store/actions/todoListAction';

class ViewTodo extends Component {

	componentDidMount() {
	  const getListTodo = (this.props);
	  getListTodo();
	}

	render(){
		const {todos} = this.props;
		return (
			<div>
				{todos.map((todo) => (
					<div key={todo._id}>{todo.task}</div>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	todos:state.todos
});

const mapDispatchToProps = (dispatch) => ({
	getListTodo:dispatch => dispatch(todoListAction.retrieve())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewTodo);