import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todos: []
  }
  // 读取存储的数据
  componentDidMount() {
    let log = localStorage.getItem('log');
    let logObj = eval('[' + log + ']');
    this.setState({ todos: logObj });
  }
  componentDidUpdate() {
    this.saveAll();
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="todo_list_box">
        <h1>todo list</h1>
        <Header getTodo={this.getTodo} />
        <List todos={todos} delTodo={this.delTodo} changeTodo={this.changeTodo} />
        <Footer todos={todos} changeAll={this.changeAll} clearAll={this.clearAll} />
      </div>
    )
  }
  getTodo = (todo) => {
    const { todos } = this.state;
    const newTodos = [todo, ...todos];
    this.setState({ todos: newTodos });
  }
  delTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((value, _index, _array) => {
      return value.id !== id
    })
    this.setState({ todos: newTodos });
  }
  changeTodo = () => {
    // console.table(this.state.todos);
    const state = this.state;
    this.setState(state);
  }
  changeAll = (checked) => {
    let { todos } = this.state;
    const newTodo = todos.map((todo) => {
      todo.isDone = checked;
      return todo;
    })
    this.setState({ todos: newTodo });
  }
  clearAll = () => {
    this.setState({ todos: [] });
  }
  saveAll = () => {
    console.table(this.state.todos);
    let log = this.state.todos.map((value) => {
      // console.log(value);
      return JSON.stringify(value);
    })

    localStorage.setItem('log', log.toString());
  }
}
