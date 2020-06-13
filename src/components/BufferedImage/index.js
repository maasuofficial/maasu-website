import React from 'react'
import PropTypes from 'prop-types'

class BufferedImage extends React.Component {
  constructor(props) {
    super(props)

    this.handleLoad = this.handleLoad.bind(this)
    this.handleError = this.handleError.bind(this)

    this.state = { buffering: true }
  }

  handleLoad(e) {
    this.setState({ buffering: false })
  }

  handleError(e) {
    this.setState({ buffering: false })
  }

  render() {
    const { className, src, alt, ...props } = this.props
    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('posr h-a w-a')

    if (this.state.buffering) {
      classes.push('buffering')
    }

    return (
      <div className={classes.join(' ')}>
        <img
          onLoad={this.handleLoad}
          onError={this.handleError}
          src={src}
          alt={alt}
          {...props}
        />
      </div>
    )
  }
}

BufferedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default BufferedImage
