import React, { Component } from 'react'
import ButtonCode from "../button.json"
import Buttons from './Buttons';


class ButtonsField extends Component {

    render() {
        let totalButtons = ButtonCode.keys.map((obj,i,arr)=>
        {
            return(
            <Buttons 
            innerText={arr[i]["id"]}
            updateTextValue = {this.props.updateChange}
            />)
        });

        return (
            <div style={this.props.buttonStyle} className='buttonsField'>
                { totalButtons }
            </div>
        )
    }
}

export default ButtonsField