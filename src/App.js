import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import AllTodos from './components/AllTodos';
import CreateTodo from './components/CreateTodo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/todos" component={AllTodos} />
        <Route exact path="/todos/create" component={CreateTodo} />
      </BrowserRouter>
        
     
    );
  }
}

export default App;
