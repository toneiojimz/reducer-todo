import React, { useContext } from  'react';
import styled from 'styled-components';

const Completed= styled.div`
    display; flex;
    flex-direction: column;
    text-decoration: strikethrough;
    background-color: aqua;
    width: 200px;
`;

const Todo = props => {
    const {dispatch} = props;
    
 
    
    return (
        <ul 
            className= {props.completed ? "strike" : ""}
            onClick={() => dispatch({ type: "MARK_COMPLETED", payload: props.id})}
            id={props.id}> 
            <Completed>
                <h2>Todo Tasks</h2>
                {props.item}
            </Completed>
        </ul>
        
    )
}
export default Todo;