import { useState } from 'react';
import React from 'react';
import BoxList from './BoxList'
import TodoList from '../todos/src/TodoList'

function App(){
  return (
    <div>
      <TodoList />
      <BoxList />
    </div>
  )
}

export default App
