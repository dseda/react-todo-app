import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <li>
        {this.props.task}
        <button>Edit</button>
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
}

export default Todo;
