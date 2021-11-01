import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
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
        <NewTodoForm />
        <div>{todos}</div>
      </div>
    );
  }
}

export default TodoList;
