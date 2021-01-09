import React from 'react';


class AddItemInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.props.inputTask(e.target.value)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick(e)
    }

    render() {
        const { value } = this.props
        return (
            <form className="form-inline">
                <div className="form-group mx-3">
                    <input type="text" value={value} className="form-control" placeholder="new todo..." onChange={this.handleChange} />
                    <button className="btn btn-primary" onClick={this.handleClick}>Add</button>
                </div>
            </form>
        )
    }

}


export default AddItemInput
