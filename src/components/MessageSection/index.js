import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'
import {connect} from 'react-redux';

import actions from '../../actions/messageAction';

class MessageSection extends Component {

  handleDismiss = () => {
    const dismiss = this.props.dismiss;
    dismiss();
  }

  render() {
      const {header,content,list,error,success,visible} = this.props;
      return visible&&header ? (
        <Message
          onDismiss={this.handleDismiss}
          error = {error}
          success = {success}
          header={header}
          content={content}
          list={list}
          onClick={this.handleDismiss}
          style={{position:'absolute',top:0,right:'1em'}}
        />):null;
  }
}

const mapStateToProps = (state) => {
  const {message} = state;

  return {
    visible:message.visible,
    error:message.error,
    success:message.success,
    header:message.header,
    content:message.content,
    list:message.list
  }

};

const mapDispatchToProps = (dispatch) => ({
  dismiss:() => dispatch(actions.dismiss())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageSection)