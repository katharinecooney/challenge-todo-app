import React, { Component } from 'react';
import todo from '../lib/todo-service';

class CreateTodo extends Component { 
  state = {
    title: '',
    body: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    todo.createTodo(this.state)
  }

  render() {
    return (
      <div>
        <h1>create todo</h1>
        <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="frontText">Title</label>
            <input onChange={this.handleChange} type="text" id="title" name="title"/>
            <label htmlFor="description">Body</label>
            <input onChange={this.handleChange} type="text" id="body" name="body"/>
            <button type="submit">Submit</button>
          </form>
      </div>
    )
  }
}

export default CreateTodo;