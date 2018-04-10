import React,{Component} from 'react';
import { Container,Form,Input } from 'semantic-ui-react';

import {connect} from 'react-redux';
import actions from '../../../actions/todoListAction';

class AddTodo extends Component{
	handleSubmit(e){
		e.preventDefault();

		const {task} = e.target;
		const {add} = this.props;
		add({task:task.value});
		e.target.task.value=null;
	}

	render(){
		return (
				<Form onSubmit={this.handleSubmit.bind(this)}>
			    <Form.Field>
			      <Input placeholder='Enter you todo...' name='task'/>
			    </Form.Field>
			  </Form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	add:(todo) => dispatch(actions.createTodo(todo))
})

export default connect(null,mapDispatchToProps)(AddTodo);