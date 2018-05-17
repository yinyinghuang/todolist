import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Segment,Container } from 'semantic-ui-react';

import actions from '../../../actions/todoListAction';
import AddTodo from '../AddTodo';

class ListTodo extends Component {

	componentDidMount() {
	  const {getListTodo} = this.props;
	  getListTodo();
	}

	render(){

		const {todo} = this.props;
		return (
			<Container>
				<AddTodo />
				<Segment.Group>
				{
					
					todo && todo.length ?
						todo.map(item => (
							<Segment key={item._id}>{item.task}</Segment>
						))
						:
						<div>加载中...</div>
				}
				</Segment.Group>
			</Container>
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