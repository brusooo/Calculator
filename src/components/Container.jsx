import React, { Component } from 'react'
import TextField from './TextField'
import ButtonsField from './ButtonsField';
import ErrorField from './ErrorField';
import Info from './Info';

const validKeys = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "x", "/", "( )", "."];
const arithmetic = ["+", "-", "x", "÷"];
let temp = "", res = ""
var mexp = require('math-expression-evaluator');

class Container extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: "",
            buttonState : {
                display : "flex"
            },
            errorState : {
                display : "none"
            }
        }
    }

    errorMsg = () =>{
        this.setState({
            errorState : {
                display : "flex"
            },
            buttonState:{
                display : "none"
            }
        })
        setTimeout(()=>{
            this.setState({
                errorState : {
                    display : "none"
                },
                buttonState:{
                    display : "flex"
                }
            })
        },500)
    }

    handleChange = (e) => {
        if (validKeys.includes(e.target.value.toString().slice(-1))) {
            this.setState({
                value: e.target.value
            })
        }
    }

    updateValue = (val) => {
        if (isFinite(val)) {
            temp += val;
        }

        else if ((arithmetic.includes(val) && !arithmetic.includes(temp.slice(-1))) && temp.length !== 0) {
            temp += val;
        }

        else if (val === ".") {
            if (temp.length === 0 || arithmetic.includes(temp.slice(-1))) {
                temp += "0.";
            }
            else if (temp.split(/[-|+|x|÷]/).slice(-1)[0].includes("(")) {
                temp += "0.";
            }
            else if (!temp.split(/[-|+|x|÷]/).slice(-1)[0].includes(".")) {
                temp += ".";
            }
            else {
                temp += "";
            }
        }

        else if (val === "+/-") {
            let splitLen = temp.split(/[-|+|x|÷]/).length
            let comLen = (temp.split(/[-|+|x|÷]/).join("").length + (splitLen - 1)) - temp.split(/[-|+|x|÷]/)[splitLen - 1].length

            if(!(temp.split(/[-|+|x|÷]/).slice(-1).includes("-")) && (temp.split(/[-|+|x|÷]/)[ splitLen - 2] !== "")) {
                if(temp.split(/[-|+|x|÷]/).slice(-1)[0].includes("(")){
                    temp = temp.slice(0,comLen + 1) + "-" + temp.split(/[-|+|x|÷]/).slice(-1)[0].replace("(","")
                }
                else{
                    temp = temp.slice(0,comLen) + "(-" + temp.split(/[-|+|x|÷]/).slice(-1)
                }
            }
            
            
        }

        else if (val === "( )") {
        let s, e;
        let cur = temp.slice(-1);
        if (temp.length === 0) {
            temp = "(" + temp;
        }
        else {
            s = temp.split("(").length - 1
            e = temp.split(")").length - 1

            if ((s === e || s < e) && (arithmetic.includes(cur))) {
                temp += "(";
            }
            else if ((s === e || s < e) && !arithmetic.includes(cur)) {
                temp += "x(";
            }
            else if ((s === e || s > e) && cur[cur.indexOf("(") + 1] !== undefined) {
                temp += ")x";
            }
            else {
                this.errorMsg();
            }
        }
        }

        else if (val === "=") {
            res += temp
            res = res.replace(/[x]/g, "*").replace(/[÷]/g, "/");


            try {
                temp = (mexp.eval(res)).toString();
                res = ""
            }
            catch {
                this.errorMsg()
            }

        }

        else if (val === "C") {
            temp = ""
            this.setState({ value: "" })
        }

        else if (val === "D") {
            temp = temp.slice(0, temp.length - 1)
        }
        else{
            this.errorMsg();
        }

        this.setState({
            value: temp
        })
    }

    render() {
        return (
            <div className='container' >
                <Info />
                <TextField
                    validate={validKeys}
                    textValue={this.state.value}
                    textChange={this.handleChange} />
                <ButtonsField
                    updateChange={this.updateValue} 
                    buttonStyle={this.state.buttonState}/>
                <ErrorField errorStyle={this.state.errorState}/>
            </div>
        )
    }
}

export default Container