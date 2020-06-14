import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from '../'

class Time extends React.Component {
  render() {
    return (
      <Cell className={'timeContainer'}>
        <div className={'labelContainer'}>
          <div>
            <span>{this.props.label}</span>
          </div>
        </div>
        <div className={'contentContainer'}>{this.props.children}</div>
      </Cell>
    )
  }
}

Time.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Time
