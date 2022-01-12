import { useState, useEffect } from "react";
import "./Todo.css";

function Todo({ todo, update, remove, toggleTodo }) {
  const [to_do, setTodo] = useState({
    isEditting: false,
    newTask: todo.task,
    progress: todo.isDone,
  });
  const handleRemove = (e) => {
    remove(todo.id);
  };
  const handleChange = (e) => {
    setTodo({ newTask: e.target.value, isEditting: true });
  };
  const toggleForm = (e) => {
    setTodo({ isEditting: !to_do.isEditting });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    update(todo.id, to_do.newTask);
    setTodo({ isEditting: false });
  };
  const handleTodoProgress = () => {
    toggleTodo(todo.id);
    setTodo({ progress: todo.isDone });
  };
  useEffect(() => {
    console.log(todo);
  }, [todo]);
  return (
    <div className="Todo-Container">
      {!to_do.isEditting ? (
        <div className="Todo">
          <div
            className={`NotDone ${to_do.progress ? "Done" : ""}`}
            onClick={handleTodoProgress}
          ></div>
          <li key={todo.id}>{todo.task}</li>
          <div className="Buttons">
            <button id="Delete" onClick={handleRemove}>
              X
            </button>

            <button onClick={toggleForm} disabled={to_do.isEditting}>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="Edit-Form-Container">
          <form id="Edit-Todo-Form" onSubmit={handleUpdate}>
            <input
              type="text"
              name="task"
              value={to_do.newTask}
              onChange={handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Todo;
