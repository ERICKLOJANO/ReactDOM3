import React from 'react'
import Tablerow from './TableRow'
import '../index.css'

class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            //testing fucntionality of tablerow, need to add rows and cells on button clicks
            <table>
                {
                    this.props.row.map((rows) => {
                        return <Tablerow col = {this.props.col} />
                    })
                }
            </table>
        )
    }
}

export default Table