import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ["potatoes", "fries", "hash browns", "wedges", "mashed"]
    };
  }

  render() {
    var myArray = this.state.foods.map(a => <p>{a}</p>);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Foods List</h2>
        <h2>{myArray}</h2>
        <h2>{myArray}</h2>
      </div>
    );
  }
}

export default App;
