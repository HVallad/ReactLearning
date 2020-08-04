import React, { Component } from "react";
import "./App.css";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome firstName='Hunter' lastName='Vallad'/>

        {/* <Message />
        {/* <Greet firstName='Hunter' lastName='Vallad'/> }
        <Counter addValue="1"/> */}
      </div>
    );
  }
}

export default App;
