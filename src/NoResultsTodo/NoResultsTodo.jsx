import React from 'react';
import './NoResultsTodo.css';
import { HiArchive } from "react-icons/hi";

function NoResultsTodo() {
  return (
        <div className='NoResultsTodo--container'> 
        <HiArchive className='NoResultsTodo--icon'/>
        <p>No se encontraron resultados</p>
        </div> 
    
  )
}

export {NoResultsTodo};