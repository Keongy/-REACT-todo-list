import React from 'react'
import { useState } from 'react'
import '../App/css/App.css'


export function TodoForm({ addTodo }) {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return <form className="form-group d-flex align-items-center" onSubmit={handleSubmit}>
    <input type="text" className="form-control"  placeholder='todo...' required value={value} onChange={e => setValue(e.target.value)} />
    <button className="bg-transparent border-0">
      <svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon-add">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
   

  </form>
}