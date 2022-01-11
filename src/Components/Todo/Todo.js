import { useState } from "react";
import "./Todo.css";
function Todo() {
  const [todo, setTodo] = useState({ task: "", id: "", done: false });

  return (
    <div className="Todo-Container">
      <div className="Todo">
        <div className={"NotDone"}></div>
        <li key={todo.id}>{todo.task}</li>
      </div>
    </div>
  );
}

export default Todo;
