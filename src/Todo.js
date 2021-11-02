import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditting: false, task: this.props.task };
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.id);
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  toggleForm() {
    this.setState({ isEditting: !this.state.isEditting });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({ isEditting: false });
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
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleClick}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
  }
}

export default Todo;
