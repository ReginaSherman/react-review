import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'

function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])

  return (
    <div className="App">
      <Form todo={todo} list={list} setTodo={setTodo} setList={setList}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
