import React, { Component } from 'react'

class Buttons extends Component {

  updateVal = () =>{
    this.props.updateTextValue(this.props.innerText)
  }

  render() {
    return (
      <div className='buttons' onClick={this.updateVal}>{this.props.innerText}</div>
    )
  }
}

export default Buttons