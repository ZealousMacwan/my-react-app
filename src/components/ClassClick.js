import React, { Component } from 'react'

class ClassClick extends Component {
    classClickHandler(){
        console.log("Class click button clicked");
    }
  render() {
    
    return (
      <div>
        <button onClick={this.classClickHandler}>Class Click</button>
      </div>
    )
  }
}

export default ClassClick