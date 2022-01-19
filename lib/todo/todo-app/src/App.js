import React, { useState } from 'react'
import './App.css';
import ToDoForm from './ToDoForm'

const initialState = [
  {
    title: "Wash the dishes",
    complete: false,
  },
  {
    title: "Walk the dog",
    complete: false,
  },
  {
    title: "Make the bed",
    complete: true,
  },
]; 

function App() {
  const [ todo, setTodo ] = useState(initialState)
  return (
    <div className="App">
     <ToDoForm initialState={ initialState }/>
      
    </div>
  );
}

export default App;
