import React, { Component } from 'react'
import * as Unicons from '@iconscout/react-unicons';

class Info extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         infoBtn : true,
         detailBox : {
            visibility : "hidden"
         }
      }
    }

    toggleButton = () =>{
        this.setState({
            infoBtn : !this.state.infoBtn,
            opacityStyle : {
                opacity : 1
            }
        })

        if(this.state.infoBtn){
            this.setState({
                detailBox : {
                    visibility : "visible"
                }
            })   
        }
        else{
            this.setState({
                detailBox : {
                    visibility : "hidden"
                }
            })    
        }

        
    }


    render() {
        let state;
        if(this.state.infoBtn){
            state = <Unicons.UilInfoCircle className="info_circle" />
        }
        else{
            state = <Unicons.UilTimesCircle className="info_circle" style={this.state.opacityStyle}/>
        }
        return (
            <div className="info" >
                <div className='info_icon' onClick={this.toggleButton}>
                    { state }
                </div>
                <div className='info_details' style={this.state.detailBox}>
                    <ul>
                        <li>If any error Occurs ,  clear the calculation field Using C button and it will reset all</li>
                        <li>If you try to calculate using the Invalid format , it will result in error</li>
                        <li>If you want to delete the text , Use the D button to delete the text one by one</li>
                        <li>If you want to use negative sign , Use +/- button</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Info