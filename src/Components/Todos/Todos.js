import { useState, useEffect } from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import TodoList from "../TodoList/TodoList";
import "./Todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="Todos">
      <h1>To-Do App</h1>
      <NewTodoForm addTodo={setTodos} todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;
