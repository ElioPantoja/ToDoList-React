import React from "react";
import "./css/TodoCounter.css"

function TodoCounter({total, completed }){

    return (
    <h3>Se completaron {completed} de {total} To Do's</h3> );
}

export default TodoCounter;