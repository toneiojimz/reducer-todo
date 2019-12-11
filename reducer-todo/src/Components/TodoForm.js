import React, { useState } from 'react';
import styled from 'styled-components';

const InNewClear = styled.div`
    display:flex;
    flex-direction: column;
    width: 200px;
    padding-top: 20px;
`;


const TodoForm = (props) => {
    const { todo, dispatch}= props;

    const [newTodo, setNewTodo] = useState("");
   

    const handleChanges = e => {
        setNewTodo(e.target.value)
    }
  

    return (
        <InNewClear>
            <input
                className= ""
                type= "text"
                value={newTodo}
                onChange={handleChanges}
                name="newTodo"
                placeholder= "..what now... "
                />
            <button
                onClick={() => {
                    dispatch({ type: "UPDATE_TODO", payload: newTodo});
                    setNewTodo("");
                }}
                >Add New Todo</button>
                <button onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}>
                    Clear Completed
                </button>
        </InNewClear>
    );
};

export default TodoForm;