import React, { useContext } from  'react';


const Todo = props => {
    const {dispatch} = props;
    
 
    
    return (
        <ul 
            className= {props.completed ? "strike" : ""}
            onClick={() => dispatch({ type: "MARK_COMPLETED", payload: props.id})}
            id={props.id}> 
            {props.item}
        </ul>
        
    )
}
export default Todo;