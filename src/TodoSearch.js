import React from "react";
import "./css/TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}){
    //funcion que me guarda lo escrito dentro del todoSearch
    const inputTodo = (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }


    return [
        <input 
        className="TodoSearch"
        placeholder = "Ingrese to do a buscar"
        onChange={inputTodo}
        />,
        <p>{searchValue}</p>    
    ];
}

export default TodoSearch;