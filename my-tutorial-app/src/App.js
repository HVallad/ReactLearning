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

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome firstName='Hunter' lastName='Vallad'/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Message /> */}
        {/* <Greet firstName='Hunter' lastName='Vallad'/> */}
        {/* <Counter addValue="1"/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        <NameList/>
      </div>
    );
  }
}


export default App;
