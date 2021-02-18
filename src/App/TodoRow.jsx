import React from 'react'
import { DeleteIcon, EditIcon } from './ui/Icon'
import './css/Icon.css'
import './css/Todo.css'



export function Todo({ todo, index, removeTodo, completeTodo, openEditModal }) {
    return <div className="d-flex justify-content-between align-items-center">
        <form className="d-flex align-items-center mw-80">
            <input type="checkbox" checked={todo.isCompleted} className="form-check-inline" onChange={() => completeTodo(index)} />
            <label className="form-check-label truncate"
                style={{ textDecoration: todo.isCompleted ? "line-through" : '' }}
            >{todo.text}</label>
        </form>
        <div>
            <button className="bg-transparent border-0 edit-icon" onClick={() => openEditModal(index)} >
                <EditIcon />
            </button>
            <button className="bg-transparent border-0 delete-icon" onClick={() => removeTodo(index)} >
                <DeleteIcon />
            </button>
        </div>
    </div>
}