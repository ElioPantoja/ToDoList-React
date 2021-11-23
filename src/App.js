import react from 'react';
import './App.css';

const todoTest = [
  {text : "ex1", completed: false},
  {text : "ex2", completed: false},
  {text : "ex3", completed: false}
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <h3>Se completaron x de y To Do's</h3>

      <TodoSearch/>
      <input placeholder = "Ingrese to do a buscar"/>

      <TodoList>
        {todoTest.map(todo =>(
          <TodoItem/>
        ))}
        
      </TodoList>
      <CreateTodoButton/>
      <button></button>
    </React.Fragment>

  );
}

export default App;
