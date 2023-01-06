import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';



class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Zealous'
      }
      console.log('1 LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('2 LifeCycleA getDerivedSateFromProps');
        return null
    }
    componentDidMount(){
        console.log('4 LifeCycleA componentDidMount');
    }
  render() {
    console.log('3 LifeCycleA render')
    return (
        <div>
            <div>LifeCycleA</div>
            <LifeCycleB/>
        </div>
      

    )
  }
  
}

export default LifeCycleA