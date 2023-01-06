import React, {Component} from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';


class App extends Component {
  render(){
    return(
      <div className="App">
        <LifeCycleA />
      </div>
    )
  }
}
export default App