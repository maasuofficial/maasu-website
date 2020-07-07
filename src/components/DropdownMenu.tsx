import React, { FC, ReactNode, useRef, useState } from 'react'
import { Link } from '@reach/router'

// There is no rule that says all content has to be 100% accessible to all people —
// you just need to do what you can, and make your apps as accessible as possible.

// https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript
// https://www.w3.org/WAI/tutorials/menus/flyout/#flyoutnavkbbtn

// this menu assumes only one nested level max since it prevents over-complexity

// it also assumes all links are relative and internal

const ulClassNames = 'lstn pa0 ma0'
const liClassNames = 'dib pointer'

type Menu = { [key: string]: string | Menu }
type MenuProps = { menu: Menu }

export const DropdownMenu: FC<MenuProps> = ({ menu }) => {
  const keys = Object.keys(menu)

  return (
    <nav aria-label="menu">
      <ul className={ulClassNames}>
        {keys.map((k, i) => {
          const item = menu[k]
          return typeof item === 'string' ? (
            <DropdownItem key={i} name={k} url={item as string} />
          ) : (
            <DropdownSubmenu key={i} title={k}>
              {Object.keys(item).map((sk, j) => (
                <DropdownItem key={j} name={sk} url={item[sk] as string} />
              ))}
            </DropdownSubmenu>
          )
        })}
      </ul>
    </nav>
  )
}

type SubmenuProps = {
  title: string
  children: ReactNode
}

export const DropdownSubmenu: FC<SubmenuProps> = ({ title, children }) => {
  const mouseOutTimeout = 500
  const [isOpen, setIsOpen] = useState(false)
  let timer = -1
  const el = useRef<HTMLLIElement>(null)

  const handleMouseOver = () => {
    setIsOpen(true)
    window.clearTimeout(timer)
  }

  const handleMouseOut = () => {
    timer = window.setTimeout(() => setIsOpen(false), mouseOutTimeout)
  }

  const handleBlur = (e: React.FocusEvent) => {
    if (el.current && !el.current.contains(e.relatedTarget as Node)) {
      setIsOpen(false)
    }
  }

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <li
      ref={el}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleBlur}
      className={liClassNames}
    >
      <button
        className={`clearall ${liClassNames}`}
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
      </button>
      <ul className={`${isOpen ? '' : 'dn'} ${ulClassNames}`}>{children}</ul>
    </li>
  )
}

type ItemProps = {
  name: string
  url: string
}

const DropdownItem: FC<ItemProps> = ({ name, url }) => {
  return (
    <li className={liClassNames}>
      <Link to={url}>{name}</Link>
    </li>
  )
}
