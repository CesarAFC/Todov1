import React from 'react';
import "./CreateTodoButton.css";

function CreateTodoButton( props ) {

  const OnClickButton = () => {

    props.setOpenModal(prevState => !prevState)
    //props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);

  }

  return (
    <button 
      className='CreateTodoButton'
      onClick={ OnClickButton }
      >+</button>
  )
}

export {CreateTodoButton};