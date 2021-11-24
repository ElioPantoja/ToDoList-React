import React from "react";
import "../public/css/TodoItem.css"

function TodoItem (props){
  return (
  <li>
    <span>C</span>
    <p>{props.text}</p>
    <span>X</span>
  </li> )
}

export default TodoItem