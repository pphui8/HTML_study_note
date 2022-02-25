import React, { Component } from 'react'
import { NavLink,  Outlet } from 'react-router-dom'
import './index.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <NavLink to="/about/News">News</NavLink>
        <NavLink replace={true} to="/about/Messages" state={{id: 9, title: 'msg'}}>Message</NavLink>
        <hr />
        {/* 使用outlet来指定存放区域 */}
        <div className="value">
          <Outlet />
        </div>
      </div>
    )
  }
}