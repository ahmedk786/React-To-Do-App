import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        placeholder="Enter a task..."
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
}

export default TodoForm;
