//! import React, { Component } from 'react'
//! import { Button } from 'antd'
//! import 'antd/dist/antd.min.css'
//! 
//! 
//! export default class Count extends Component {
//!   state = {
//!     count: 0
//!   }
//!   render() {
//!     console.log(this.props);
//!     return (
//!       <div>
//!         &nbsp;<h2>&nbsp;当前求和为: {this.props.count}</h2>
//!         <select ref={c => this.selectNumber = c}>
//!           <option value={1}>1</option>
//!           <option value={2}>2</option>
//!           <option value={3}>3</option>
//!         </select>&nbsp;
//!         <Button onClick={this.sum}>+</Button>&nbsp;
//!         <Button onClick={this.red}>-</Button>&nbsp;
//!         <Button onClick={this.sumIfOdd}>当前和为奇数再加</Button>&nbsp;
//!         <Button onClick={this.sumAsync}>异步加</Button>&nbsp;
//!       </div>
//!     )
//!   }
//!   sum = () => {
//!     const { value } =  this.selectNumber;
//!     
//!   }
//!   red = () => {
//!     const { value } =  this.selectNumber;
//!     
//!   }
//!   sumIfOdd = () => {
//!     const { value } =  this.selectNumber;
//!     if(value % 2 !== 0) {
//!       
//!     }
//!   }
//!   sumAsync = () => {
//!     const { value } =  this.selectNumber;
//!     
//!   }
//! }
