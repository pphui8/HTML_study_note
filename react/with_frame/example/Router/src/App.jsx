import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="nav">
            {/* 使用路由链接实现组件切换 */}
            {/* 小写，不带. */}
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/about">About</Link>
          </div>
          <div className="page">
            {/* 注册路由 */}
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
              </Routes>
          </div>
      </div>
    )
  }
}
