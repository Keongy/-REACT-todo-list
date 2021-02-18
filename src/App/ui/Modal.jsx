import React, { useEffect } from 'react'
import { useState } from 'react';
import { createPortal } from 'react-dom';


export function Modal({ onClose, item, edit }) {
  const [todo, setTodo] = useState('')

  useEffect(() => {
    setTodo(item)
  }, [item])


  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const editTodo = (e) => {
    e.preventDefault()
    if (todo.length) {
      edit(todo)
      setTodo('')
    }
  }



  return createPortal(
    <>
      <div className="modal fade show"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form className="form-inline justify-content-between" onSubmit={editTodo}>
                <input type="text" className="form-control" value={todo} required onChange={handleChange} />
                <div>
                  <button type="button" className="btn btn-primary" onClick={editTodo} >Save changes</button>
                  <button type="button" className="close ml-3" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={onClose} >&times;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>, document.body
  );
}