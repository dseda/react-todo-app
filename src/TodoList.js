import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  /* Load old to-dos if there are, or initialise the state with a default to-do */
  async componentDidMount() {
    await this.setState({
      todos: JSON.parse(localStorage.getItem("todos")) || [
        { task: "Add to-do", id: "1", done: false },
      ],
    });
  }

  addTodo(todo) {
    const newTodos = [...this.state.todos, todo];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
  }

  async remove(id) {
    await this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos });
  }

  toggleTodo(id) {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    let todos = "";
    if (this.state.todos.length === 0) {
      todos = this.state.todos.map((todo) => (
        <Todo
          toggleTodo={this.toggleTodo}
          remove={this.remove}
          update={this.update}
          task={todo.task}
          key={todo.id}
          id={todo.id}
          isDone={todo.done}
        />
      ));
    } else {
      todos = this.state.todos.map((todo) => (
        <Todo
          toggleTodo={this.toggleTodo}
          remove={this.remove}
          update={this.update}
          task={todo.task}
          key={todo.id}
          id={todo.id}
          isDone={todo.done}
        />
      ));
    }

    return (
      <div className="TodoList">
        <h1>To-Do App</h1>
        <NewTodoForm addTodo={this.addTodo} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
