import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ task: "Add todo", done: false }] };
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  remove(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
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
  }
  render() {
    const todos = this.state.todos.map((todo) => (
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
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        {todos}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
