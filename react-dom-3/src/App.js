import logo from './logo.svg';

import React from 'react'
import './App.css';
import Table from './components/Table'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
      rows: [''],
      columns: [''],
      color: ''
    }
  
  }
  
  addCol = () => {
    let column = this.state.columns
    column.push('')
    this.setState({columns: column})
  }

  render() {
    return (
      <div className="App">
      <div>
      {/*<button onClick = {this.addRow}>Add Row</button>*/};
      </div>
      <Table col = {this.state.columns} row = {this.state.rows} />
      </div>
   );
  }
}

export default App;
