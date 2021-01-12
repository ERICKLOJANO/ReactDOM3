import React from 'react'
import Tablecell from './TableCell'

class Tablerow extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            //testing functionality of table cell, need to add rows and cells when respective buttons are clicked
            <div>
                <tr>
                    {this.props.col.map((columns) => {
                        return <Tablecell col2 = {this.props.col} />
                    })
                    }
                </tr>
            </div>
        )
    }
}

export default Tablerow
