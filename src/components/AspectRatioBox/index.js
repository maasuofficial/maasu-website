import React, { Component } from 'react'
import PropTypes from 'prop-types'
class AspectRatioBox extends Component {
  render() {
    const {
      ar,
      aspectRatio,
      children,
      className,
      resize,
      resizeable,
      style,
      width,
      ...props
    } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('w-100 aspectRatioBox')
    const styles = { ...style }

    styles.width = width || '100%'

    const ratio = aspectRatio || ar
    styles['--aspect-ratio'] = ratio || '1'

    return (
      <div {...props} className={classes.join(' ')} style={styles}>
        {resize || resizeable ? (
          children
        ) : (
          <div className={'aspectRatioBoxAbsolute'}>
            <div className="h-100 w-100">{children}</div>
          </div>
        )}
      </div>
    )
  }
}

AspectRatioBox.propTypes = {
  ar: PropTypes.string,
  aspectRatio: PropTypes.string,
  resize: PropTypes.bool,
  resizeable: PropTypes.bool,
  width: PropTypes.string,
}

AspectRatioBox.defaultProps = {
  width: '100%',
}

export default AspectRatioBox
