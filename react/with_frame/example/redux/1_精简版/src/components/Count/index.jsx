import React, { Component } from 'react'
import store from '../../redux/store'
import { Button } from 'antd'
import 'antd/dist/antd.min.css'


export default class Count extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
        // 当store更新时调用
        store.subscribe(() => {
        //   this.render();// 无效
        this.setState({});
    })
  }
  render() {
    return (
      <div>
        &nbsp;<h2>&nbsp;当前求和为: {store.getState()}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <Button onClick={this.sum}>+</Button>&nbsp;
        <Button onClick={this.red}>-</Button>&nbsp;
        <Button onClick={this.sumIfOdd}>当前和为奇数再加</Button>&nbsp;
        <Button onClick={this.sumAsync}>异步加</Button>&nbsp;
      </div>
    )
  }
  sum = () => {
    const { value } =  this.selectNumber;
    store.dispatch({type: 'sum', data: value * 1});
  }
  red = () => {
    const { value } =  this.selectNumber;
    store.dispatch({type: 'red', data: value * 1});
  }
  sumIfOdd = () => {
    const { value } =  this.selectNumber;
    if(value % 2 !== 0) {
        store.dispatch({type: 'sum', data: value * 1});
    }
  }
  sumAsync = () => {
    const { value } =  this.selectNumber;
    setTimeout(() => {
        store.dispatch({type: 'sum', data: value * 1});
    }, 500);
  }
}
