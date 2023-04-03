import React from 'react';
import "./CreateTodoButton.css";

function CreateTodoButton( props ) {

  const OnClickButton = () => {

    props.setOpenModal(prevState => !prevState)
    //props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);

  }

  return (
    <div className='CreateTodoButton-container'>
      <button 
        className='CreateTodoButton'
        onClick={ OnClickButton }
        ></button>
      </div>
  )
}

export {CreateTodoButton};