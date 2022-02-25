import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class List extends Component {
  constructor() {
    super();
  }
  render() {
    const {state: {users, isFirst, isLoading, err}} = this.props;
    return (
      <div className="items">
        {
          isFirst ? <h2>Enter to search</h2> :
          isLoading ? <h2>Loading</h2> :
          err ? <h2>{err}</h2> : 
          users.map((user) => {
            return (
              <div className="item" key={nanoid()}>
                <a href={user.html_url}>
                  <img src={user.avatar_url} alt="none" />
                </a>
                <p>{user.login}</p>
              </div>
            )
          })
        }
        </div>
    )
  }
}
