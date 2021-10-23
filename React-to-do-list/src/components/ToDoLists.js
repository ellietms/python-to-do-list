import React from "react";
import '../App.css';

export default function ToDoLists({list, handleDeleteItem}){
    let toDoListPage;
    // What if we have a list from the backend, but it's empty?
    if(list.length > 0){
      return(
        toDoListPage = ( 
          list.map((toDo,index) => {
            // You shouldn't have to `window.location.reload` in a react app - what means you do here?
            return (
            <div key={index}> 
            <div className = "toDoList"> {index + 1} - {toDo.name} 
            <button className="button" onClick= {() => {handleDeleteItem(toDo.id);window.location.reload(true)}}> Delete </button>
            </div>
            </div>
            )
        })
        )
      )
     }
     else{
      toDoListPage = 
      (
        <p>Loading ......</p>
      )  
      }

    return(
    <div>
      {toDoListPage}
    </div>
    )
}