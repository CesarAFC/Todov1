import React from 'react';
import { useTodos } from './useTodos';
import {TodoHeader} from '../TodoHeader/TodoHeader';
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
import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';


function App() {

  const {
    error,
    loading, 
    searchedTodos, 
    todos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue, 
    deleteTodo,
    completeTodo, 
    setOpenModal,
    syncronizeTodos, 
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader loading={loading}>

        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        />
          <hr></hr>

        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        /> 

      </TodoHeader>

        <TodoList
          todos={todos}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          error={error}
          onError={ () => <TodoError /> }
          loading={loading}
          onLoading={ () => <TodoLoading /> }
          onEmpty={ () => <EmptyTodos /> }
          onResults={ () => <NoResultsTodo searchValue={searchValue} /> }

          render={ todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            priority={todo.priority}
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) } />
          )}
        >
          {/* {todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            priority={todo.priority}
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) } />
          )} */}

        </TodoList>


        {/* <TodoList>
        {error && <TodoError error={error}/>}
        {loading && <TodoLoading/>}
        { (!loading && !searchedTodos.length && !todos.length) && <EmptyTodos/>}
        { (!loading && !searchedTodos.length && todos.length) ? <NoResultsTodo/> : ''}
          


        {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            priority={todo.priority}
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) } />
        ) ) }
      </TodoList> */}


  {openModal && (
    <Modal>
      <TodoForm 
      addTodo={addTodo}
      setOpenModal={setOpenModal}
      />
    </Modal>
  )}

  

  <CreateTodoButton
  setOpenModal={setOpenModal}
  />

  <ChangeAlertWithStorageListener 
  sincronize={syncronizeTodos}
  />
</React.Fragment>
);


}

export default App;
