import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    createSumAction,
    _createRedAction
} from '../../redux/count_action'

class Count extends Component {
  render() {
    return (
      <div>
          <h2>Sum: {this.props.sum}</h2>
          <button onClick={this.add}>add one</button>
      </div>
    )
  }
  add = () => {
      this.props.add(1)
  }
}

export default connect(
    state => ({
        sum: state
    }),
    {
        add: createSumAction,
    }
)(Count)