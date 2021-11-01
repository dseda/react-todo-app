import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [{ task: "Do sth" }] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <div>
        <Todo task={todo.task} />
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
