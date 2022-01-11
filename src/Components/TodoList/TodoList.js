import React from "react";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <div className="TodoList">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
