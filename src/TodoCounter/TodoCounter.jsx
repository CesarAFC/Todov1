import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoCounter.css";
import { VscChecklist } from "react-icons/vsc";

function TodoCounter( ) {

    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <>
        <h2 className='TodoCounter'>Has completados <strong>{completedTodos}</strong>  de <strong>{totalTodos}</strong> {totalTodos <= 1 ? "tarea " : "tareas "}<VscChecklist className='TodoCounter--icon'/></h2>
        </>
    );
}

export {TodoCounter};