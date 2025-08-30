import React, { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      )}

      <div className="actions">
        <button className="icon-btn" onClick={handleEdit}>
          {isEditing ? <FaCheck /> : <FaEdit />}
        </button>
        <button className="icon-btn delete" onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
