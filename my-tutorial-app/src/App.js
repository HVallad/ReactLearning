import React, {Component} from 'react';
import './App.css';
import Greet from './Components/Greet'
//import Welcome from './Components/Welcome'
//import Hello from './Components/Hello'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet firstName="Hunter" lastName="V" Num='1' />
      </div>
    );
  }
}

export default App;
