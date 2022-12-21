import React, { Component  } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor',
            buttonText: 'Subscribe'
        }
    }
    
    changeMessage(){
        var newState = this.state
        if(this.state.buttonText==='Subscribe'){
            newState.buttonText = 'Unscuscribe'
            newState.message = 'Thanks for subscribing'
        }else{
            newState.buttonText = 'Subscribe'
            newState.message = 'Welcome visitor'
        }
        this.setState( (prevState) => (
            newState
        ))
    }

    //must have render which returns html or atleast NULL
    render(){
        return(
            <div>
                <h1> {this.state.message}</h1>    
                <button onClick={()=> this.changeMessage()}>{this.state.buttonText}</button>      
            </div>
        )
    }
}
export default Message