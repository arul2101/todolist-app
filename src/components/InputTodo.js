import React, { useReducer, useState } from 'react';
import ShowTodo from './ShowTodo';

export const ACTIONS = {
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo"
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...state, newTodo(action.payload.todo)];
        case ACTIONS.DELETE_TODO:
            return state.filter(item => {
                return item.id !== action.payload.id;
            })
        default:
            return state;
    }
}

const newTodo = (todo) => {
    return {
        id: Math.floor(Math.random() * 2999),
        todo: todo
    }
}

const InputTodo = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [inputTodo, setInputTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: inputTodo } });
        setInputTodo('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="text-add"
                    type="text"
                    placeholder="Enter Text.."
                    onChange={e => setInputTodo(e.target.value)}
                    value={inputTodo}
                    required
                />
                <button className="button-add">Add</button>
            </form>
            {state.map(item => {
                return (
                    <ShowTodo
                        key={item.id}
                        state={item}
                        dispatch={dispatch}
                    />
                )
            })}
        </>
    );
}

export default InputTodo