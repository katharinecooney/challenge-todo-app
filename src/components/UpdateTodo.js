import React, { Component } from 'react';
import todo from '../lib/todo-service';

class UpdateTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: props.location.state.todos;
    }
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const {todos} = this.state;
    const todoId = req.params;
    return (
      <div>
        <h1>update!</h1>
      </div>
    )
  }
}

export default UpdateTodo;