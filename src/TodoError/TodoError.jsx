import React from 'react';
import { FcDeleteDatabase } from "react-icons/fc";

function TodoError( { error } ) {
  return (
    <div className='TodoError--container'>
      <FcDeleteDatabase className='TodoError--icon'/>
      <p>{ error }</p>
    </div>
  )
}

export {TodoError};