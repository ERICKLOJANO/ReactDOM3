import React from 'react'

class Tablecell extends React.Component {

    render() {
        //returns cell to be added into row
        return (
            <td onClick = {this.props.updateCell}></td>
        )
    }
}

export default Tablecell
