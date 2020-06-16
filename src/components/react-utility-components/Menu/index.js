import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import SubMenu from './SubMenu'

const Menu = (props) => {
  const { children, dropdown, horizontal, linkWrapper, ...otherProps } = props

  return (
    <nav aria-label="menu" {...otherProps}>
      <ul>
        {React.Children.toArray(children).map(function (child) {
          return React.cloneElement(child, {
            dropdown,
            horizontal,
            linkWrapper,
          })
        })}
      </ul>
    </nav>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  dropdown: PropTypes.bool,
  horizontal: PropTypes.bool,
  linkWrapper: PropTypes.func,
}

Menu.defaultProps = {
  dropdown: false,
  horizontal: false,
  linkWrapper: () => {},
}

Menu.Link = Link
Menu.SubMenu = SubMenu

export default Menu
