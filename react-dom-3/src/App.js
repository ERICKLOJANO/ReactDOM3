import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      columns: [''],
      rows: [''],
      color: ''
    }
  }

  //updates number of rows
  addRow = () => {
    let row = this.state.rows
    row.push('')
    this.setState({rows: row})
  }


  //this will control grid
  buttonClick = (event) => {
    let userClick = event.target.value;

    //checks if add row was clicked
    if(userClick === "addRow"){
      this.addRow()
    }
    else if (userClick === "removeRow") {
      console.log("The user clicked remove row, row has been removed")
    }

    //checks if add column was clicked
    if(userClick === "addColumn"){
      this.addCol()
    }
    else if (userClick === "RemoveColumn") {
      console.log("The user clicked add column, column has been removed")
    }
  };

  //updates color when a new color is selected
  //if choose color is selected, cell color is changed to white when clicked
  updateColor = (event) => {
    console.log(event.target.value)
    this.setState({color: event.target.value})
  }
  
  //updates number of columns
  addCol = () => {
    let column = this.state.columns
    column.push('')
    this.setState({columns: column})
  }

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
          <select onChange = {this.updateColor}>
            <option value = "white">Choose Color</option>
            <option value = "blue">Blue</option>
            <option value = "green">Green</option>
            <option value = "red">Red</option>
            <option value = "yellow">Yellow</option>
            </select>
        </div>
        {/*Passes down values from state into child components*/}
        <Table row = {this.state.rows} col = {this.state.columns} color = {this.state.color} />
      </div>
    );
    }
  }
  export default App;
