import logo from './logo.svg';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

function App() {

  const [todo, setTodo] = useState([])


  const getItem = (item) => {
    setTodo((prevState) => {
      return [...prevState, item]
    })
  }

  const getCompleted = (id) => {
    setTodo((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <BrowserRouter>
      {/* <div className="todo"> */}
      <AddTodo item={getItem} />
      {todo && todo.map((todo, index) => (
        <TodoItem id={index} item={todo} completed={getCompleted} />
      ))}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
