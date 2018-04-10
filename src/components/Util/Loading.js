import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class MessageSection extends Component {
  state = { visible: this.props.visible }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
      return this.state.loading ? (
        <Message
          onDismiss={this.handleDismiss}
          header='Welcome back!'
          content='This is a special notification which you can dismiss.'
        />
      ) : null;
  }
}

export default MessageSection