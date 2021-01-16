import React from 'react'
import Tablecell from './TableCell'

class Tablerow extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            //creates row with a number of columns equal to col
            <div>
                <tr>
                    {this.props.col.map((columns) => {
                        return <Tablecell color = {this.props.color} />
                    })
                    }
                </tr>
            </div>
        )
    }
}

export default Tablerow
