import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  render() {
    return (
      <div className='container'>
        <Search saveState={this.saveState} />
        <List state={this.state} saveState={this.saveState} />
      </div>
    )
  }
  saveState = (state) => {
    this.setState(state);
  }
}
