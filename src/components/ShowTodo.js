import React, { useState } from 'react';
import { ACTIONS } from './InputTodo';
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";



const ShowTodo = ({ state, dispatch }) => {
    const deleteHandle = () => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: state.id } });
    };

    const [editTodo, setEditTodo] = useState('');
    const [modalToggle, setModalToggle] = useState(false);

    const handleModalToggle = () => {
        setModalToggle(!modalToggle);
        setEditTodo(state.todo);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        state.todo = editTodo;
        setModalToggle(!modalToggle);
    }

    if (modalToggle) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            <div className="list-container">
                <p>{state.todo}</p>
                <FiEdit className='edit' onClick={handleModalToggle} />
                <FiTrash2 className='remove' onClick={deleteHandle} />
            </div>
            {modalToggle && (
            <div className="modal">
                <div className="overlay" onClick={handleModalToggle}></div>
                <div className="modal-content">
                    <h3>Edit Todo</h3>
                    <form onSubmit={handleEdit}>
                        <input
                            type="text"
                            placeholder='Edit Todo..'
                            onChange={e => setEditTodo(e.target.value)}
                            value={editTodo}
                            required
                            autoFocus
                        /><br /><br />
                        <button type='submit' className='save-edit-btn'>Save</button>
                    </form>
                    <AiOutlineCloseCircle className='close-modal' onClick={handleModalToggle} />
                </div>
            </div>)}
        </>
    )
}

export default ShowTodo