import React from 'react';

/* Components */
import TodoCounter from "./TodoCounter"
import TodoItem from './TodoItem';
import TodoSearch from "./TodoSearch"
import TodoList from './TodoList';
import CreateTodoButton from"./CreateTodoButton"

/* Styles - CSS */

const todos = [
  {text : "ex1", completed: false},
  {text : "ex2", completed: false},
  {text : "ex3", completed: false},
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>

  );
}

export default App;
