import React from 'react'
import { useState } from 'react';
import { TodoForm } from './App/Input';
import { TodoRow } from './App/TodoRow';
import { Modal } from './App/ui/Modal';



export function App() {
    const [items, setItems] = useState([])
    const [itemValue, setItemValue] = useState('')
    const [modal, setModal] = useState(false);

    function handleDeleteItem(item) {
        setItems(items => [...items].filter(i => i !== item))
    }

    function addTodo(todo) {
        setItems(items => [...items, todo])
    }

    function edit(todo) {
        const tmp = items.indexOf(itemValue)
        var newItems = [...items]
        newItems.splice(tmp, 1, todo)
        setItems(newItems)
        setModal(false);
    }

    const showModal = function (item) {
        setItemValue(item)
        setModal(true);
    };

    const hideModal = function () {
        setModal(false);
    };


    return <div className="container border">
        <div className="row justify-content-center mt-5">
            <div className="col-4">
                <h1 className="text-center mb-3">TodoList</h1>
                <TodoForm addTodo={addTodo} />
                <TodoRow items={items} deleteItem={handleDeleteItem} onShow={showModal} />
            </div>
        </div>
        {modal && <Modal onClose={hideModal} item={itemValue} edit={edit} />}
    </div>
}



