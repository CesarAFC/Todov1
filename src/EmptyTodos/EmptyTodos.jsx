import React from 'react';
import './EmptyTodo.css';
import { HiClipboardCheck, HiPlusCircle } from "react-icons/hi";

function EmptyTodos() {
  return (
        <div className='EmptyTodo--container'> 
        <HiClipboardCheck className='EmptyTodo--icon'/>
        <p>Crea un Todo! con el icono <HiPlusCircle className='EmptyTodo--modal'/> de abajo</p>
        </div> 
    
  )
}

export {EmptyTodos};