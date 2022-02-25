import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/About/pages/News'
import Messages from './pages/About/pages/Messages'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="nav">
            {/* 使用路由链接实现组件切换 */}
            {/* 小写，不带. */}
                <NavLink className="link" to="/home">Home</NavLink>
                <hr />
                <NavLink className="link" to="/about">About</NavLink>
          </div>
          <div className="page">
            {/* 注册路由 */}
              <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />}>
                  <Route path='/about/News' element={<News />} />
                  &nbsp;
                  {/* 传参 */}
                  <Route path='/about/Messages' element={<Messages />} />
                </Route>
              </Routes>
          </div>
      </div>
    )
  }
}
