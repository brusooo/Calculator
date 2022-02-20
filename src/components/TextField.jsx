import React, { Component } from 'react'

class TextField extends Component {
    
    render() {
        return (
            <div className='textField'>
                <input type="text" spellCheck="false" className='textInput' onChange={this.props.textChange} value={this.props.textValue} readOnly/>
            </div>
        )
    }
}

export default TextField