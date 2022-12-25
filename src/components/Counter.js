import React, { Component } from "react"

class Counter extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        //setState have two parameter 
        //1 state object
        //2 callBack function executes after state is executed 
        this.setState(
           {
            count: this.state.count+1
           },
           () => {
            console.log(this.state.count)
           }
        )
        
    }
    render(){
        return(
            <div>
                <div>Count {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }
}
export default Counter
