import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cell extends Component {
  render() {
    const {
      auto,
      children,
      className,
      lg,
      md,
      shrink,
      sm,
      ...props
    } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('cell')

    const addBreakpoint = (k, v) => {
      if (v > 0) {
        classes.push(`${[k + '-' + v]}`)
      }
    }

    if (auto) {
      classes.push('auto')
    }

    if (shrink) {
      classes.push('shrink')
    }

    addBreakpoint('sm', sm)
    addBreakpoint('md', md)
    addBreakpoint('lg', lg)

    return (
      <div {...props} className={classes.join(' ')}>
        {children}
      </div>
    )
  }
}

Cell.propTypes = {
  auto: PropTypes.bool,
  lg: PropTypes.number,
  md: PropTypes.number,
  shrink: PropTypes.bool,
  sm: PropTypes.number,
}

Cell.defaultProps = {
  auto: false,
  lg: 0,
  md: 0,
  shrink: false,
  sm: 0,
}

export default Cell
