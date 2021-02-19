import React from 'react'
import { useState } from 'react'
import { TodoForm } from './App/Input'
import { Todo } from './App/TodoRow'
import { Modal } from "./App/ui/Modal";
import './App/css/App.css'


export function App() {
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState(false)
    const [oldTodo, setOldTodo] = useState('')
    const [index, setIndex] = useState('')

    const addTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        setTodos(newTodos)
    }

    const openEditModal = index => {
        setOldTodo(todos[index])
        setIndex(index)
        setEdit(true)
    }

    const editTodo = todo => {
        const newTodos = [...todos]
        newTodos.splice(index, 1, {text: todo, isCompleted: false})
        setTodos(newTodos)
        setEdit(false)
    }

    const closeModal = () => {
        setEdit(false)
    }
    


    return <div className="container">
        <div className="row justify-content-center">
            <div className="col-6 wrapper mt-5 pb-3">
                <h1 className="text-center text-white">TodoList</h1>
                <TodoForm
                    addTodo={addTodo}
                />
                <ul className="list-group">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="list-group-item list-group-item-info"
                        >
                            <Todo
                                todo={todo}
                                index={index}
                                removeTodo={removeTodo}
                                completeTodo={completeTodo}
                                openEditModal={openEditModal}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {edit ?
            <Modal
                editTodo={editTodo}
                oldTodo={oldTodo}
                closeModal={closeModal}
            /> :
            null}
    </div>

}