import React from 'react';

/* Components */
import TodoCounter from "./TodoCounter"
import TodoItem from './TodoItem';
import TodoSearch from "./TodoSearch"
import TodoList from './TodoList';
import CreateTodoButton from"./CreateTodoButton"

/* Styles - CSS */

const todosTest = [
  {text : "ex1", completed: false},
  {text : "ex2", completed: false},
  {text : "ex3", completed: true},
];


function App() {
  const [todos, setTodos] =React.useState(todosTest) //todos de prueba
  const [searchValue, setSearchValue] = React.useState("") //Todo search -usando estado mediante el hook useState

  const completedTodos = todos.filter(todo =>!!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos= []
  if(!searchValue.length >= 1){
    searchedTodos =todos
  }else{
    searchedTodos= todos.filter(todo=>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
    

  }

  return (
    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos} />
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>

  );
}

export default App;
