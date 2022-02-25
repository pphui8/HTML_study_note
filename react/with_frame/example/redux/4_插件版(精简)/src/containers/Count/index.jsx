//! 创建UI组件与redux交流的容器组件

import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.min.css'


export default class Count extends Component {
  state = {
    count: 0
  }
  render() {
    console.log(this.props);
    return (
      <div>
        &nbsp;<h2>&nbsp;当前求和为: {this.props.count}</h2>
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
    
  }
  red = () => {
    const { value } =  this.selectNumber;
    
  }
  sumIfOdd = () => {
    const { value } =  this.selectNumber;
    if(value % 2 !== 0) {
      
    }
  }
  sumAsync = () => {
    const { value } =  this.selectNumber;
    
  }
}

// 引入UI与redux
import { connect } from 'react-redux'
import { createSumAction, createRedAction, createSumAsyncAction } from '../../redux/count_action'


// mapStateToProps返回对象中的key作为状态传给了UI组件props的key,value作为props的value
// 即状态
//! function mapStateToProps(state) {
//!     return {
//!         count: state
//!     }
//! }
const mapStateToProps = state => ({count: state})

// mapDispatchToProps返回对象中的key作为状态传给了UI组件props的key,value作为props的value
// 即操作状态的方法
const mapDispatchToProps = dispatch => ({
        sum: data => dispatch(createSumAction(data)),
        red: data => dispatch(createRedAction(data)),
        sumAsync: (data, time) => dispatch(createSumAsyncAction(data, time))
})

// 还会固定传进入一个store

// 创建并暴露一个容器组件
// connet需要两个函数参数
//! export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 直接把 mapDispatchToProps 写为函数
export default connect(
    state => ({count: state}),
    {
        sum: createSumAction,
        red: createRedAction,
        sumAsync: createSumAsyncAction
    }
)(CountUI)