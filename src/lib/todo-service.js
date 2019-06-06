import axios from 'axios';

class Todo {
  constructor () {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    });
  }

  getAllTodos () {
    return this.todo
      .get(`/todos`)
      .then(({ data }) => data);
  }

  getOneTodo (todoId) {
    return this.todo
      .get(`/todos/${todoId}`)
      .then(({ data }) => data)
  }

  createTodo (newTodo) {
    const {title, body} = newTodo;
    return this.todo
      .post(`/todos`, {title, body})
      .then(({ data }) => data)
  }

  updateTodo (todoId, newTodo) {
    const {title, body} = newTodo;
    return this.todo
      .put(`/todos/${todoId}`)
      .then(({ data }) => data)
  }

}

const todo = new Todo();

export default todo;