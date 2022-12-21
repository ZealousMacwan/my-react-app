import React, {Component} from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Greet name="Zee" heroName="Batman">
          <p>This is child element</p>
        </Greet>
        <Greet name="Mac" heroName="Superman">
          <button>Button</button>
        </Greet>
        <Greet name="Zees" heroName="Spiderman"></Greet>
        <Welcome name="Zee">
          <p>This is class child</p>
        </Welcome>
        <Welcome name="mac"></Welcome>
      </div>
    );
  }
}
export default App