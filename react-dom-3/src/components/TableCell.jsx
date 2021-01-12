import React from 'react'

class Tablecell extends React.Component {

    //creates cell with event handler when clicked
    customCell = () => {
        let cell = <td onClick = {this.changeColor}></td>
        return cell
    }
    
    //changes cell color when clicked
    changeColor = (event) => {
        event.target.style.background = this.props.color
    }

    render() {
        //returns cell to be added into row
        return (
                this.customCell()
        )
    }
}

export default Tablecell
