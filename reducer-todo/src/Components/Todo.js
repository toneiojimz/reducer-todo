import React, { useState, useReducer } from  'react';

import { reduce, initialState } from '../Reducers/todoReducer';

const Todo = () => {

    const [todoState, dispatch] = useReducer (reducer, initialState);

    const [newTodoItem, setNewTodoItem]= useState('');

    const handleChanges = e => {
        setNewTodoItem(e.target.value);
    };

    return (
        <div>
            {!todoState.editing ? (
                <h1>
                    {todoState.Todo}{''}
                    <i onClick={() => setEditing(!editing)}/>
                </h1>
            ): (
                <div>
                    <input 
                        type= "text"
                        item= "newTodoItem"
                        value= {newTodoItem}
                        onChange= {handleChanges}
                        />
                        <button 
                            onClick={() => {
                                dispatch({ type: 'UPDATE_TODO', payload: newTodoItem});
                                setEditing(!editing);
                            }}
                            >Add Todo Item</button>
                </div>

            )}
        </div>
    )
}
export default Todo;