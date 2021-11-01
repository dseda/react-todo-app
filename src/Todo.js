import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.task}
        <button>Edit</button>
        <button>X</button>
      </li>
    );
  }
}

export default Todo;
