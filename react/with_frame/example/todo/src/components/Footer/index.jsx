import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    const {changeAll, todos, clearAll} = this.props;
    const doneCount = todos.reduce((pre, todo) => {
      return (todo.isDone? pre + 1: pre);
    }, 0);
    const allCount = todos.length;
    return (
        <div className="footer">
            <input type="checkbox" onChange={this.selectAll(changeAll)} checked={doneCount === allCount? true : false} />
            <span>
              <p className="message">已完成</p>
              <p>{doneCount}/{allCount}</p>
            </span>
            <button onClick={() => {this.handleClear(clearAll)}}>清除所有任务</button>
        </div>
    )
  }
  selectAll = (changeAll) => {
    return (event) => {
      // console.log(event.target.checked, changeAll);
      changeAll(event.target.checked)
    }
  }
  handleClear = (clearAll) => {
    clearAll();
  }
}
