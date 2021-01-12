import logo from './logo.svg';
import './App.css';
import Table from './components/Table'

class App extends React.Component() {
  constructor(props){
    super(props);
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
