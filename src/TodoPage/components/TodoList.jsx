import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector(state => state.todo)
  return (
    <div className="todo-area">
      <ul className="todo-list">
        <TodoItem todoList={todoList}></TodoItem>
      </ul>
    </div>
  );
};

export default TodoList;
