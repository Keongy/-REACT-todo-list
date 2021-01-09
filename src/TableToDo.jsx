import React from 'react'

class TableToDo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const {items} = this.props 
        const rows = []
        items.forEach(item => {
            rows.push({item}, <button className="btn btn-danger btn-sm">X</button>)
        });
        return (
            <div className='alert alert-info col-8'>
                {rows}
            </div>
        )
    }

}



export default TableToDo