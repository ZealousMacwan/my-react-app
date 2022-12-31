import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    
    //  Method 3 good to use because binding happens only once 
    // compare to method 1 where on every render bind happens
    // this.clickHandler = this.clickHandler.bind(this)

    }

    // clickHandler(){
    //    this.setState({
    //     message: 'Goodbye!'
    //    })
    //    console.log(this);
    // }

    // Method 4 class property as an arrow function, experimental for now
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this);
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Method 1 avoid */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click for event</button> */}

        {/* Method 2 avoid */}
        {/* <button onClick={()=> this.clickHandler()}>Click by arrow</button> */}

        {/* Method 3/4 good to use */}
        <button onClick={this.clickHandler}>Click by constructor</button>

      </div>
    )
  }
}

export default EventBind