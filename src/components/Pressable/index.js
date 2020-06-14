import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pressable extends Component {
  render() {
    const { children, className, href } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('pressableContainer')

    return (
      <a href={href} role="button" className={'link'}>
        <div className={classes.join(' ')}>{children}</div>
      </a>
    )
  }
}

Pressable.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default Pressable
