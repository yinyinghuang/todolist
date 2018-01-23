import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import actions from '../../../actions/todoListAction';
import AddTodo from '../AddTodo';

class ListTodo extends Component {

	componentDidMount() {
	  const {getListTodo,user} = this.props;
	  getListTodo(user._id);
	}

	render(){

		const {todo,pendding} = this.props;
		return (
			<div>
<<<<<<< HEAD
				<AddTodo />
=======
				<AddTodo/>
>>>>>>> 970f2439e9af51f04e4fa5fa23064b6a90c920bb
				{
					
					todo ?
						todo.map(item => (
							<div key={item._id}>{item.task}</div>
						))
						:
						<div>no task</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	todo:state.todoList.todo,
	user:state.authUser.user,
	pendding:state.httpState.pendding
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getListTodo:actions.getListTodo
},dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListTodo);