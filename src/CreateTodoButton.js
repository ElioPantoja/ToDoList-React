import React from "react";
import "./css/CreateTodoButton.css"

function CreateTodoButton (props){
    return(
        <button
            className= "CreateTodoButton"
            onClick={()=> console.log("Create button test")}
        >+
        </button>
    )
}
export default CreateTodoButton