import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      ...this.state,
      id: uuid(),
      done: false,
    };
    if (newTodo.task !== "") {
      this.props.addTodo(newTodo);
      this.setState({ task: "" });
    } else {
      alert("Please enter a todo");
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="new">New Todo</label>
        </div>
        <input
          key={this.state.id}
          id="new"
          name="newTodo"
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>Add todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
