import React, { Component } from 'react';
import todo from '../lib/todo-service';
import {Link} from 'react-router-dom';

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
                <Link to={{pathname: `/todos/${todo._id}/update`, state:{todos}}}>
                  <div key={todo._id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>  
                  </div>
                </Link>
              )
            })}
          </div>)
        }
      </div>
    )
  }
}

export default AllTodos; 