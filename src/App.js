import React from 'react';
import './App.css';
import AddItemInput from "./AddItemInput";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: "",
      items: []
    }
    this.handleInputTask = this.handleInputTask.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.renderTodos = this.renderTodos.bind(this)
  }



  handleInputTask(userInput) {
    this.setState({ userInput })
  }

  handleClick() {
    if (this.state.userInput === "") { return }
    this.setState({
      items: [...this.state.items, this.state.userInput],
      userInput: ""
    })
  }

  deleteRow(e) {
    e.preventDefault()
    let items = this.state.items
    const index = items.indexOf(e.target.value)
    items.splice(index, 1)
    this.setState({ items })
  }


  deleteTodo(item) {
    let items = this.state.items
    const index = items.indexOf(item)
    items.splice(index, 1)
    this.setState({items})
  }

  renderTodos() {
    return this.state.items.map((item) => {
      return (
        <div key={item + Math.random()} className="alert alert-info">
          {item} <button className="btn btn-sm btn-danger" onClick={this.deleteTodo.bind(this, item)}>X</button>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center m-0 mt-5">
          <div className="col-3 text-center">
            <h1>ToDo List</h1>
            {JSON.stringify(this.state)}
          </div>
        </div>
        <div className="row justify-content-center m-0">
          <div className="col-3">
            <AddItemInput handleClick={this.handleClick} value={this.state.userInput} inputTask={this.handleInputTask} />
          </div>
        </div>
        <div className="row justify-content-center m-0 mt-3">
          <div className="col-3">
            {this.renderTodos()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
