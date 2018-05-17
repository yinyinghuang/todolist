import React,{Component} from 'react';
import { Form,Input } from 'semantic-ui-react';

import {connect} from 'react-redux';
import actions from '../../../actions/todoListAction';

class AddTodo extends Component{
	constructor(props){
		super(props);
		this.state={
			value:null
		}
	}

	handleSubmit(e){
		e.preventDefault();

		const {task} = e.target;
		const {add} = this.props;
		add({task:task.value});
		e.target.task.value=null;
	}

	handleChange(e){
		const target = e.target;
		this.setState({
			value:target.value.toUpperCase()
		})
	}

	render(){
		return (
				<Form onSubmit={this.handleSubmit.bind(this)}>
			    <Form.Field>
			      <Input placeholder='Enter you todo...' name='task' value={this.state.value} onChange={this.handleChange}/>
			    </Form.Field>
			  </Form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	add:(todo) => dispatch(actions.createTodo(todo))
})

export default connect(null,mapDispatchToProps)(AddTodo);