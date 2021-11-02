import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditting: false, task: this.props.task };
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTodoCompletion = this.handleTodoCompletion.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.id);
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  toggleForm(e) {
    this.setState({ isEditting: !this.state.isEditting });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ isEditting: false });
  }
  handleTodoCompletion() {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    if (this.state.isEditting) {
      return (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="Todo">
          <div
            className={`NotDone ${this.props.isDone ? "Done" : ""}`}
            onClick={this.handleTodoCompletion}
          ></div>
          <li>{this.props.task}</li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleClick}>X</button>
        </div>
      );
    }
  }
}

export default Todo;
