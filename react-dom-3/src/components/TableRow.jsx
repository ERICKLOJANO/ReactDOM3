import React from 'react'
import Tablecell from './tablecell'

class Tablerow extends React.Component {

    render() {

        return (
            //testing functionality of table cell, need to add rows and cells when respective buttons are clicked
            <div>
                <tr>
                    <Tablecell />
                    <Tablecell />
                </tr>
            </div>
        )
    }
}

export default Tablerow