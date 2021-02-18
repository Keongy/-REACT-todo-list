import React, { useState } from 'react'


export function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState('')

  function submitTodo(e) {
    e.preventDefault()
    if (todo === '') {return}
    addTodo(todo)
    setTodo('')
  }

  function handleChange(e) {
    setTodo(e.target.value)
  }

  return <form className="form-group d-flex" onSubmit={submitTodo}>
    <input type="text" className="form-control" value={todo} onChange={handleChange} placeholder='todos...' />
    <button className="btn btn-sm btn-primary">
      Ajouter
    </button>
  </form>
}