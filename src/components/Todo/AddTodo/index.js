import React,{Component} from 'react';

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
			<div>
				<div className="container">
					<div className="row clearfix">
						<div className="col-md-12 column">
							<form className="form-horizontal" role="form"  onSubmit={this.handleSubmit.bind(this)}>
								<div className="form-group">
									 <label htmlFor="inputTask" className="col-sm-2 control-label">Task</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputTask" name="task"/>
									</div>
								</div>
<<<<<<< HEAD
								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-10">
										 <button type="submit" className="btn btn-default">submit</button>
									</div>
								</div>
=======
>>>>>>> 970f2439e9af51f04e4fa5fa23064b6a90c920bb
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	add:(todo) => dispatch(actions.createTodo(todo))
})

export default connect(null,mapDispatchToProps)(AddTodo);