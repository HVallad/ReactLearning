import React, { Component } from "react";
import "./App.css";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind"
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import Inline from "./Components/Inline";
import './appStyles.css'
import {success} from './Components/appStyles.module.css'
import Form from "./Components/Form";
import LifecycleA from "./Components/LifecycleA";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={success}>Success</h1> */}
        {/* <Welcome firstName='Hunter' lastName='Vallad'/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Message /> */}
        {/* <Greet firstName='Hunter' lastName='Vallad'/> */}
        {/* <Counter addValue="1"/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <Inline/> */}
        {/* <Form /> */}
        <LifecycleA/>
      </div>
    );
  }
}


export default App;
