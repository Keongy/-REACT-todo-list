// import React, { useEffect } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';


export function Modal({ editTodo, onClose, oldTodo, closeModal }) {
  const [todo, setTodo] = useState('')


  useEffect(() => {
    setTodo(oldTodo.text)
  }, [oldTodo])


  const submitTodo = (e) => {
    e.preventDefault()
    editTodo(todo)
    setTodo('')
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
              <form className="form-inline justify-content-between" onSubmit={submitTodo}>
                <input type="text" className="form-control" value={todo} required onChange={e => setTodo(e.target.value)} />
                <div>
                  <button type="button" className="btn btn-primary" onClick={submitTodo} >Save changes</button>
                  <button type="button" className="close ml-3" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={closeModal} >&times;</span>
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