import React from "react";
import {TodoContext} from '../TodoContext'
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch'; 
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import {TodoForm} from '../TodoForm'
import {Modal} from '../Modal';
import { TodoLoading } from "../TodoLoading/TodoLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { TodoError } from "../TodoError/TodoError";
import { NoResultsTodo } from "../NoResultsTodo/NoResultsTodo";

function AppUI() {

  const {
            error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
            todos,
          } = React.useContext(TodoContext);

    return (
        <React.Fragment>

      <TodoCounter/>
        <hr></hr>

      <TodoSearch/> 

            <TodoList>


            {error && <TodoError error={error}/>}

            {loading && <TodoLoading/>}

            { (!loading && !searchedTodos.length && !todos.length) && <EmptyTodos/>}
            { (!loading && !searchedTodos.length && todos.length) ? <NoResultsTodo/> : ''
            }
              

    
            {searchedTodos.map( todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                priority={todo.priority}
                onComplete={ () => completeTodo(todo.text) }
                onDelete={ () => deleteTodo(todo.text) } />
            ) ) }
          </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      

      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
    );
}

export { AppUI };