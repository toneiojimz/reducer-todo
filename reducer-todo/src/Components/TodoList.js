import React from 'react';

import Todo from './Todo';
import { element } from 'prop-types';



const TodoList = props => {
    const { todo, dispatch } = props; 

    return (
            <div>
                {todo.items.map( el => {
                    return (
                        <Todo
                            key= {el.id}
                            id={el.id}
                            dispatch={dispatch}
                            completed={el.completed}
                            item={el.item}
                            />
                    )
                })}
            </div>
    )
}

export default TodoList;