import React, { Component } from 'react'
import PropTypes from 'prop-types'

const variants = [
  'h1',
  'heading1',
  'h2',
  'heading2',
  'h3',
  'heading3',
  'h4',
  'heading4',
  'h5',
  'heading5',
  'h6',
  'heading6',

  'sub1',
  'subtitle1',
  'sub2',
  'subtitle2',
  'sub3',
  'subtitle3',
  'sub4',
  'subtitle4',
  'sub5',
  'subtitle5',
  'sub6',
  'subtitle6',

  'text1',
  'text2',
  'text3',
  'text4',
  'text5',
  'text6',

  'em',
  'emphasis',

  'styled',
]

class Typography extends Component {
  createTypography(children) {
    const { className, cap, capitalized, variant, ...props } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []

    classes.map((c) => {
      return c + '-typography'
    })

    if (cap || capitalized) {
      classes.push('ttu')
    }

    classes.push('typography')

    switch (variant) {
      case 'h1':
      case 'heading1':
        return (
          <h1 {...props} className={classes.join(' ')}>
            {children}
          </h1>
        )
      case 'h2':
      case 'heading2':
        return (
          <h2 {...props} className={classes.join(' ')}>
            {children}
          </h2>
        )
      case 'h3':
      case 'heading3':
        return (
          <h3 {...props} className={classes.join(' ')}>
            {children}
          </h3>
        )
      case 'h4':
      case 'heading4':
        return (
          <h4 {...props} className={classes.join(' ')}>
            {children}
          </h4>
        )
      case 'h5':
      case 'heading5':
        return (
          <h5 {...props} className={classes.join(' ')}>
            {children}
          </h5>
        )
      case 'h6':
      case 'heading6':
        return (
          <h6 {...props} className={classes.join(' ')}>
            {children}
          </h6>
        )

      case 'sub1':
      case 'subtitle1':
        return (
          <p
            {...props}
            className={`sub1-typography subtitle-typography ${classes.join(
              ' '
            )}`}
          >
            {children}
          </p>
        )
      case 'sub2':
      case 'subtitle2':
        return (
          <p
            {...props}
            className={`sub2-typography subtitle-typography ${classes.join(
              ' '
            )}`}
          >
            {children}
          </p>
        )
      case 'sub3':
      case 'subtitle3':
        return (
          <p
            {...props}
            className={`sub3-typography subtitle-typography ${classes.join(
              ' '
            )}`}
          >
            {children}
          </p>
        )
      case 'sub4':
      case 'subtitle4':
        return (
          <p
            {...props}
            className={`sub4-typography subtitle-typography ${classes.join(
              ' '
            )}`}
          >
            {children}
          </p>
        )
      case 'sub5':
      case 'subtitle5':
        return (
          <p
            {...props}
            className={`sub5-typography subtitle-typography ${classes.join(
              ' '
            )}`}
          >
            {children}
          </p>
        )
      case 'sub6':
      case 'subtitle6':
        return (
          <p
            {...props}
            className={`sub6-typography subtitle-typography ${classes.join(
              ' '
            )}`}
          >
            {children}
          </p>
        )

      case 'text1':
        return (
          <span
            {...props}
            className={`text1-typography text-typography ${classes.join(' ')}`}
          >
            {children}
          </span>
        )
      case 'text2':
        return (
          <span
            {...props}
            className={`text2-typography text-typography ${classes.join(' ')}`}
          >
            {children}
          </span>
        )
      case 'text3':
        return (
          <span
            {...props}
            className={`text3-typography text-typography ${classes.join(' ')}`}
          >
            {children}
          </span>
        )
      case 'text4':
        return (
          <span
            {...props}
            className={`text4-typography text-typography ${classes.join(' ')}`}
          >
            {children}
          </span>
        )
      case 'text5':
        return (
          <span
            {...props}
            className={`text5-typography text-typography ${classes.join(' ')}`}
          >
            {children}
          </span>
        )
      case 'text6':
        return (
          <span
            {...props}
            className={`text6-typography text-typography ${classes.join(' ')}`}
          >
            {children}
          </span>
        )

      case 'em':
      case 'emphasis':
        return (
          <em {...props} className={classes.join(' ')}>
            {children}
          </em>
        )

      case 'styled':
        return (
          <span {...props} className={`styled-typography ${classes.join(' ')}`}>
            {children}
          </span>
        )

      default:
        return (
          <h3 {...props} className={classes.join(' ')}>
            {children}
          </h3>
        )
    }
  }

  render() {
    return this.createTypography(this.props.children)
  }
}

Typography.propTypes = {
  cap: PropTypes.bool,
  capitalized: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(variants).isRequired,
}

Typography.defaultProps = {
  cap: false,
  capitalized: false,
  variant: 'h1',
}

export default Typography
