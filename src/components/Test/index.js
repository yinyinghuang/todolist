
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {replace} from 'react-router-redux'

const mapDispatchToProps = (dispatch) => bindActionCreators({
	replaceAct:replace
},dispatch)

export class Test extends React.Component {
	handleClick(){
		this.props.replaceAct('/')
	}

	render() {
		return (
			<div>Test why the page will redirect to index automatically
				<p onClick={this.handleClick.bind(this)}>redirect to '/'</p>
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Test)
