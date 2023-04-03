import React from "react";
import './TodoForm.css';
import { HiClipboardList } from "react-icons/hi";

function TodoForm({addTodo, setOpenModal}) {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [changePriority, setchangePriority] = React.useState('');

    const onCancel = ( ) => {
        setOpenModal(false);
    }
    const onPriority = (event) => {
        setchangePriority(event.target.checked);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        addTodo(newTodoValue, changePriority);
        setOpenModal(false);

    }
    const onChange = ( event ) => {
        setNewTodoValue(event.target.value);
    }

    return (
    <form onSubmit={onSubmit}>
        
        <label htmlFor=""><HiClipboardList className="TodoForm--icon"/>  Escribe tu nuevo Todo</label>

        <textarea 
        value={newTodoValue}
        onChange={onChange}
        cols="30" rows="10" 
        placeholder="Escribe la tarea a realizar"/>
        
        <div>
            <input type="checkbox" id="priority" onChange={onPriority}/>
            <p className="prioridad">Set High Priority</p>
        </div>

        <div className="TodoForm-buttonContainer">
            <button 
                type="button"
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel"
                >Cancelar</button>
            <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
        </div>
    </form>
    )
}

export {TodoForm};