import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listArr: ["val1", "val2", "val3", "val4", "val5", "val6", "val7", "val8"]
    }
  }

  render() {
    let list = this.state.listArr.map((e)=> {
      return (
        <p> {e} </p>
      )
    })
    
    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
