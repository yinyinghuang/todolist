import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class MessageSection extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header='Welcome back!'
          content='This is a special notification which you can dismiss.'
        />
      )
    }
  }
}

export default MessageSection