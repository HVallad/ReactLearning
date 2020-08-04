import React, { Component } from "react";

//Class Component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + parseInt(props.addValue),
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>IncrementFive</button>
      </div>
    );
  }
  
}

export default Counter;
