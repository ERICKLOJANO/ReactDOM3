import React from 'react'

class Tablecell extends React.Component {

    customCell = () => {
        //use alert to test if onclick works
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