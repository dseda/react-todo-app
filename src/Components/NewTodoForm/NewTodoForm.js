import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

function NewTodoForm({ addTodo, todos }) {
  const [todo, setTask] = useState({ task: "", id: "", done: false });

  const handleInputChange = (e) => {
    setTask({ task: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo.task != "") {
      let newTodo = {
        task: todo.task,
        id: uuid(),
        done: false,
      };
      addTodo([...todos, newTodo]);
      setTask({ task: "" });
    } else {
      alert("Please enter a todo");
      return false;
    }
  };
  return (
    <form id="New-Todo-Form" onSubmit={handleFormSubmit}>
      <label id="new-todo" htmlFor="new">
        New Todo
      </label>
      <div>
        <input
          id="new"
          name="new-todo"
          type="text"
          value={todo.task}
          onChange={handleInputChange}
        ></input>
        <button>Add</button>
      </div>
    </form>
  );
}

export default NewTodoForm;
