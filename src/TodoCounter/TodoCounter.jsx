import React from 'react';
import "./TodoCounter.css";
import { VscChecklist } from "react-icons/vsc";

function TodoCounter( {totalTodos, completedTodos, loading}) {

    return (
        <>
        <h2 
            className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
                Has completados <strong>{completedTodos}</strong>  de <strong>{totalTodos}</strong> {totalTodos <= 1 ? "tarea " : "tareas "}
                <VscChecklist className='TodoCounter--icon'/>
        </h2>
        </>
    );
}

export {TodoCounter};