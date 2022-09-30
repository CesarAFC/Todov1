import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
  return (
    <>
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <span className='LoadingTodo-text'><p></p></span>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <span className='LoadingTodo-text'><p></p></span>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <span className='LoadingTodo-text'><p></p></span>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
    <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <span className='LoadingTodo-text'><p></p></span>
        <span className='LoadingTodo-deleteIcon'></span>
    </div>
    </>
  )
}

export {TodoLoading};