import React, {Component} from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from './components/Counter'


class App extends Component {
  render(){
    return(
      <div className="App">
        <Greet name="Zealous" heroName="Zee"></Greet>
        <Welcome name="Zee" heroName="Z"></Welcome>
      </div>
    )
  }
}
export default App