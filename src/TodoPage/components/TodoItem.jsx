import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../action";

const TodoItem = ({ todoList }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const action = deleteTodo(id)
    dispatch(action)
  }

  const handleUpdate = (id) => {
    const action = updateTodo(id)
    dispatch(action)
  }
  return (
    <>
      {todoList
        ? todoList.map(item => {
            return (
              <li key = {item.id} className="todo-item">
                <p>
                  {item.content} <span>{item.completed ? "Completed" : "Incompleted"}</span>
                </p>
                <div>
                  <button className="btn-delete" onClick = {() => handleDelete(item.id)}>Delete</button>
                  <button className="btn-update" onClick = {() => handleUpdate(item.id)}>Active</button>
                </div>
              </li>
            );
          })
        : ""}
    </>
  );
};

export default TodoItem;
