import React from 'react'
import Tablerow from './TableRow'

class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            //creates table with number of rows equal to row
            <table>
                {
                   this.props.row.map((rows) => {
                        return <Tablerow col = {this.props.col} color = {this.props.color} updateCell = {this.props.updateCell}/>
                    })
                }
            </table>
        )
    }
}

export default Table
