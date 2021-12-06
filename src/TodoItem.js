import React from "react";
import "./css/TodoItem.css"

function TodoItem(props) {
  const completado = ()=>{
    alert("To do: " + props.text + " completado")
  }

  const borrado = ()=>{
    alert("To do: " + props.text + " borrada")
  }

  return (
    <li className="TodoItem">
      <span 
      onClick={completado}
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      onClick={borrado}
      className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export default TodoItem