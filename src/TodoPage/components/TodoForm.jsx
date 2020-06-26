import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from '../action'

const TodoForm = () => {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content: content,
      completed: false,
    };

    const action = addTodo(newTodo);
    dispatch(action);
  };
  
  return (
    <form className="form-post" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="input-post"
        placeholder="Write your todo here"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></input>
      <button type="submit" className="btn-submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
