import { useState, useEffect } from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTask) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.task = updatedTask;
      }
      return todo;
    });
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="Todos">
      <h1>To-Do App</h1>
      <NewTodoForm addTodo={setTodos} todos={todos} />
      <div className="TodoList">
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              update={updateTodo}
              remove={removeTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
