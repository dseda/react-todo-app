import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
// import ls from "local-storage";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }
  async componentDidMount() {
    await this.setState({
      todos: JSON.parse(localStorage.getItem("todos")) || [
        { task: "Add todo", id: "1", done: false },
      ],
    });
  }
  addTodo(todo) {
    const newTodos = [...this.state.todos, todo];
    // const newTodos = [...JSON.parse(localStorage.getItem("todos")), todo];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    // newTodos.sort(this.sortTodos);
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

    // newTodos.sort(this.sortTodos);
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
  // sortTodos(todo1, todo2) {
  //   if (todo1.done) {
  //     return 1;
  //   } else return -1;
  // }
  render() {
    let todos = "";
    if (this.state.todos.length === 0) {
      // console.log(this.props.todos);
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
        <h1>Todo App</h1>
        <NewTodoForm addTodo={this.addTodo} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
