import React, {Component} from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
//import Hello from './Components/Hello'

class App extends Component {
  render(){
    return (
      <div className="App">
          <Message/>

          <Counter addValue='2'></Counter>
      </div>
    );
  }
}

export default App;
