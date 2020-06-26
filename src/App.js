import React from 'react';
import TodoPage from './TodoPage/TodoPage';
import { useSelector } from 'react-redux';

function App() {
  const todoList = useSelector (state => state.todo)

  return (
    <div className="container">
      <h1 className="title">TODOLIST WITH REACT-REDUX HOOKS</h1>
      <h5>Total : {todoList.length}</h5>
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
