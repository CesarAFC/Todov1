import React from 'react';
import './NoResultsTodo.css';
import { HiArchive } from "react-icons/hi";

function NoResultsTodo(props) {
  return (
        <div className='NoResultsTodo--container'> 
        <HiArchive className='NoResultsTodo--icon'/>
        <p>No se encontraron resultados para "{props.searchValue}"</p>
        </div> 
    
  )
}

export {NoResultsTodo};