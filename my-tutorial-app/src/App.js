import React, { Component } from "react";
import "./App.css";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome firstName='Hunter' lastName='Vallad'/>
        <FunctionClick />
        <ClassClick/>
        {/* <Message />
        {/* <Greet firstName='Hunter' lastName='Vallad'/> }
        <Counter addValue="1"/> */}
      </div>
    );
  }
}

export default App;
