import React, { useState } from 'react';


const TodoForm = (props) => {
    const { todo, dispatch}= props;

    const [newTodo, setNewTodo] = useState("");
   

    const handleChanges = e => {
        setNewTodo(e.target.value)
    }
  

    return (
        <div>
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
        </div>
    );
};

export default TodoForm;