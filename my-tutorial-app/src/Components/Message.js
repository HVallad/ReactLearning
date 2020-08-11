import React, { Component } from "react";

//Class Component
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor!",
    };
  }

  changeText() {
    this.setState({
      message: "Thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeText()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
