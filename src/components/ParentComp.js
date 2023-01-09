import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Zealous'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Zealous'
            })
        }, 2000)
    }
  render() {
    console.log('***Parent component render***');
    return (
      <div>
        Parent components
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp