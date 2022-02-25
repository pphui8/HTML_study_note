import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
  state = {
    click: false,
  }
  render() {
    return (
      <header>
          <h1>搜索github用户</h1>
          <input type="text" ref={c => this.keyWordElm = c} />
          <button onClick={this.search}>搜索</button>
      </header>
    )
  }
  search = () => {
    if(this.state.click) return;
    this.setState({click: true});
    // console.log(this.keyWordElm);
    // 连读解构赋值
    const {keyWordElm: {value}} = this;
    this.props.saveState({
      isFirst: false,
      isLoading: true
    });
    // github已经在后端解决了跨域问题
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response => {
        // console.log(response.data);
        this.props.saveState({
          users: response.data.items,
          isLoading: false
        });
        this.setState({click: false});
      },
      err => {
        // console.log('wrong!!!');
        this.props.saveState({
          err: err.message,
          isLoading: false
        })
      }
    )
  }
}
