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
    const newTodos = [...this.state.todos, todo];
    // newTodos.sort(this.sortTodos);
    this.setState({
      todos: newTodos,
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

    // newTodos.sort(this.sortTodos);
    this.setState({ todos: newTodos });
  }
  // sortTodos(todo1, todo2) {
  //   if (todo1.done) {
  //     return 1;
  //   } else return -1;
  // }
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
