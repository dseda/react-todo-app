import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ task: "Do sth" }] };
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
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
  render() {
    const todos = this.state.todos.map((todo) => (
      <div>
        <Todo
          remove={this.remove}
          update={this.update}
          task={todo.task}
          key={todo.id}
          id={todo.id}
        />
      </div>
    ));
    return (
      <div>
        <h2>Todo List</h2>
        <div>{todos}</div>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
