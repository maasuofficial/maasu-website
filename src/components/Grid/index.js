import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'

class Grid extends Component {
  render() {
    const { children, className, x, y, ...props } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('df')

    if (y) {
      classes.push('gridY')
    } else {
      classes.push('gridX')
    }

    return (
      <div {...props} className={classes.join(' ')}>
        {children}
      </div>
    )
  }
}

Grid.propTypes = {
  x: PropTypes.bool,
  y: PropTypes.bool,
}

Grid.defaultProps = {
  x: true,
  y: false,
}

export { Grid, Cell }
export default Grid
