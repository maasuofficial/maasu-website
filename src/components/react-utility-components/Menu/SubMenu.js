import React from 'react'
import PropTypes from 'prop-types'

class SubMenu extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.createSubmenu = this.createSubmenu.bind(this)

    this.timer = setTimeout(null)
    this.state = { open: false }
  }

  handleMouseOver() {
    clearTimeout(this.timer)
    this.setState({ open: true })
  }

  handleMouseOut() {
    this.timer = setTimeout(() => {
      this.setState({ open: false })
    }, 500)
  }

  handleClick() {
    const open = !this.state.open
    this.setState({ open })
  }

  handleBlur(e) {
    if (!this.submenu.contains(e.relatedTarget)) {
      this.setState({ open: false })
    }
  }

  createSubmenu(children) {
    const {
      className,
      dropdown,
      horizontal,
      linkWrapper,
      ...otherProps
    } = this.props

    const classes = typeof className === 'string' ? className.split(' ') : []
    classes.push('submenu-ruc')

    if (this.state.open) {
      classes.push('open-ruc')
    }

    if (horizontal) {
      classes.push('horizontal-ruc')
    }

    let submenuProps = { ...otherProps }

    if (dropdown) {
      classes.push('dropdown-ruc')
      const {
        handleMouseOver,
        handleMouseOut,
        handleClick,
        handleBlur,
        // state: { open },
      } = this

      submenuProps = {
        ...submenuProps,
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
        onClick: handleClick,
        onBlur: handleBlur,
        // ['aria-haspopup']: true,
        // ['aria-expanded']: open,
      }
    }

    return (
      <li
        {...submenuProps}
        className={classes.join(' ')}
        ref={(ref) => (this.submenu = ref)}
      >
        {children}
      </li>
    )
  }

  render() {
    const { children, dropdown, horizontal, linkWrapper, ...props } = this.props

    const listItems = React.Children.toArray(children)

    // first <li> in list is the submenu trigger
    const trigger = listItems.shift()

    return this.createSubmenu(
      <React.Fragment>
        {React.cloneElement(trigger, {
          dropdown,
          horizontal,
          isSubMenuTrigger: true,
          linkWrapper,
        })}
        <ul {...props}>
          {React.Children.toArray(listItems).map(function (child) {
            return React.cloneElement(child, {
              dropdown,
              horizontal,
              linkWrapper,
            })
          })}
        </ul>
      </React.Fragment>
    )
  }
}

SubMenu.propTypes = {
  children: PropTypes.node.isRequired,
  dropdown: PropTypes.bool,
  horizontal: PropTypes.bool,
}

SubMenu.defaultProps = {
  dropdown: false,
  horizontal: false,
}

export default SubMenu
