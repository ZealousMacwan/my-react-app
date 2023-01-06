import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Zealous'
      }
      console.log('1 LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('2 LifeCycleB getDerivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('4 LifeCycleB componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }    
  render() {
    console.log('3 LifeCycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }
  
}

export default LifeCycleB