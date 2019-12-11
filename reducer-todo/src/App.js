import React, { useReducer } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList  from './Components/TodoList';
import { initialState, todoReducer} from './Reducers/todoReducer';

import styled from 'styled-components';

const myApp = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [todo, dispatchTodo] = useReducer(todoReducer, initialState) 
  return (
    <myApp>
      <TodoList dispatch={dispatchTodo} todo={todo}/>
      <TodoForm dispatch={dispatchTodo} todo={todo}/>

    </myApp>
  );
}

export default App;
