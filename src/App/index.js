import React from 'react';
import {TodoProvider} from '../TodoContext';
import {AppUI} from './AppUI';


//const defaultTodos = [
//  {text: 'Cortar cebolla', completed: false, priority: 'High'},
//  {text: 'Cortar Cilantro', completed: true, priority: 'Low'},
// {text: 'Cocinar y viajar', completed: false, priority: 'High'},
//  {text: 'Minca', completed: true, priority: 'High'}
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
