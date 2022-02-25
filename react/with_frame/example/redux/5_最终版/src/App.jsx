import React, { Component } from 'react'
import './App.css'

import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Provider自动提供了store */}
        {/* <Count store={store} /> */}
        <Count />
      </div>
    )
  }
}
