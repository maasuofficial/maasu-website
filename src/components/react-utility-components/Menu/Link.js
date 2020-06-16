import React from 'react'
import PropTypes from 'prop-types'
// import modules from './Menu.module.scss'

class Link extends React.Component {
  render() {
    const {
      children,
      className,
      dropdown,
      horizontal,
      href,
      isSubMenuTrigger,
      linkWrapper,
      ...props
    } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    // classes.push(modules.link)

    if (horizontal) {
      classes.push('horizontal-ruc')
    }

    // no href exists
    let link = (
      <span className={classes.join(' ')} {...props}>
        {children}
      </span>
    )

    if (dropdown) {
      link = (
        <button className={classes.join(' ')} {...props}>
          {children}
        </button>
      )
    }

    if (href) {
      // linkWrapper
      link = linkWrapper(href, children)

      // default link
      if (!link) {
        link = (
          <a className={classes.join(' ')} href={href}>
            {children}
          </a>
        )
      }
    }

    // is not a trigger
    if (!isSubMenuTrigger) {
      link = (
        <li className={classes.join(' ')} {...props}>
          {link}
        </li>
      )
    }

    return link
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  dropdown: PropTypes.bool,
  horizontal: PropTypes.bool,
  href: PropTypes.string,
  isSubMenuTrigger: PropTypes.bool,
  linkWrapper: PropTypes.func,
}

Link.defaultProps = {
  dropdown: false,
  horizontal: false,
  href: null,
  isSubMenuTrigger: false,
  linkWrapper: () => {},
}

export default Link
