import React from 'react'
import '../index.css'

class Tablecell extends React.Component {

    //creates cell with event handler when clicked
    customCell = () => {
        //use alert to test if onclick works, change to color change function
        let cell = <td onClick = {window.alert}></td>
        return cell
    }

    render() {

        return (
            //return function to test if the function works
                this.customCell()
        )
    }
}

export default Tablecell