import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  newWord(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input onChange={e => this.newWord(e.target.value)} />
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;
