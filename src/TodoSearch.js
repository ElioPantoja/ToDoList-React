import React from "react";
import "./css/TodoSearch.css"

function TodoSearch(){
    const inputTodo = (event)=>{
        console.log(event.target.value)
    }

    return (
        <input 
        className="TodoSearch"
        placeholder = "Ingrese to do a buscar"
        onChange="asd"
        /> );
}

export default TodoSearch;