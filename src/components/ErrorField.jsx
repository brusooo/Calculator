import React, { Component } from 'react'

class ErrorField extends Component {
  render() {
    return (
      <div className='errorField' style={this.props.errorStyle}>
          <h1>Invalid Format</h1>
      </div>
    )
  }
}

export default ErrorField