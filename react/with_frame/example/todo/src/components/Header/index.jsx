import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <input id="input" onKeyUp={this.handleKeyUp} type="text" placeholder="输入任务名称, 并按回车确认" />
        </div>
    )
  }
  handleKeyUp = (event) => {
    if(event.keyCode !== 13) {
      return;
    } else {
      // 添加的名字为空
      if(event.target.value === '') {
        return;
      }
      const todo = event.target.value;
      let newTodo = {id: nanoid(), todo: todo, isDone: false};
      // 将数据传回去
      this.props.getTodo(newTodo);
      // 清空输入框
      event.target.value = '';
    }
    // console.log(event.target.value, event.keyCode);
  }
}
