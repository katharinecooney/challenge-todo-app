import React, { Component } from 'react';
import todo from '../lib/todo-service';

class AllTodos extends Component {
  state = {
    todos: [],
    loading: true
  }

  componentDidMount() {
    todo.getAllTodos()
      .then(data => this.setState({
        todos: data,
        loading: false
      }))
  }

  render() {
    const {todos, loading} = this.state;
    
    return (
      <div>
        <h1>View All Todos</h1>
        {
          loading ? <p>loading...</p> 
          : 
          (<div>
            {todos.map(todo => {
              return (
                <div key={todo._id}>
                  <h3>{todo.title}</h3>
                  <p>{todo.body}</p>  
                </div>
              )
            })}
          </div>)
        }
      </div>
    )
  }
}

export default AllTodos; 