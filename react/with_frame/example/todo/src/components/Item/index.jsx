import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouseIn: false,
  }
  render() {
    const {todo, changeTodo} = this.props;
    const {mouseIn} = this.state;
    // console.table(todo);
    return (
        <li className="todo_item" onMouseEnter={this.handlMouseIn} onMouseLeave={this.handleMouseLeave} id={todo.id}>
            <input type="checkbox" id={todo.todo} className="checked" checked={todo.isDone} onChange={this.handleCheck(todo, changeTodo)} />
            <label htmlFor={todo.todo}>
              <p>{todo.todo}</p>
            </label>
            <button onClick={this.delTodo(todo)} className='clean_btn' style={{display: mouseIn? 'inline-block':'none'}}>删除</button>
        </li>
    )
  }
  handlMouseIn = () => {
    this.setState({mouseIn: true});
  }
  handleMouseLeave = () => {
    this.setState({mouseIn: false});
  }
  // 勾选复选框是更新状态
  handleCheck = (todo, changeTodo) => {
    return (event) => {
      todo.isDone = event.target.checked;
      changeTodo();
    }
  }
  delTodo = (todo) => {
    return () => {
      this.props.delTodo(todo.id)
    }
  }
}
