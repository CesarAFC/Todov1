import React from 'react';
import "./TodoItem.css";
import { HiCheck, HiX } from "react-icons/hi";


function TodoItem(props) {

  return (
    <li className='TodoItem'>
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
          > <HiCheck/> </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <p>{props.priority ? "High" : "Low"}</p>
        <span 
          className='Icon Icon-delete'
          onClick={props.onDelete}
          > <HiX/> </span>
    </li>
  );
}

export {TodoItem};