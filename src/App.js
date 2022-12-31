import React, {Component} from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';


class App extends Component {
  render(){
    return(
      <div className="App">
        <FunctionClick myname="Zealous"></FunctionClick>
        <ClassClick></ClassClick>
      </div>
    )
  }
}
export default App