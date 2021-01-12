import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'

class App extends Component{
  this.state = {
    columns: ['col 1', 'col 2'],
    rows: [''],
    color: ''
  }
}
addRow = () => {
  let row = this.state.row
  rows.push('')
  this.setState({rows: row})
}


  //this will control grid
  buttonClick = (event) => {
    let userClick = event.target.value;

    //checks if add row was clicked
    if(userClick === "addRow"){
      console.log("The user clicked add row, row has been added")
    }
    else if (userClick === "removeRow") {
      console.log("The user clicked remove row, row has been removed")
    }

    //checks if add column was clicked
    if(userClick === "addColumn"){
      console.log("The user clicked add column, column has been added")
    }
    else if (userClick === "RemoveColumn") {
      console.log("The user clicked add column, column has been removed")
    }
  };


render(){
  return (
    <div className="App">
      <div className = "container">
        <h1>React DOM Challenge</h1>
      </div>
      <div className = "buttonsContainer">
        <button value = "addRow" onClick = {this.buttonClick}>Add Row</button>
        <button value = "removeRow" onClick = {this.buttonClick}>Remove Row</button>
        <button value = "addColumn" onClick = {this.buttonClick}>Add Column</button>
        <button value = "RemoveColumn" onClick = {this.buttonClick}>Remove Column</button>
      </div>

      <div className = "colorsContainer">
        <select>
          <option value = "white">Choose Color</option>
          <option value = "blue">Blue</option>
          <option value = "green">Green</option>
          <option value = "red">Red</option>
          <option value = "yellow">Yellow</option>
          </select>
      </div>
      <Table />
    </div>
  );
  }
}
export default App;
