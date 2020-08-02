import React, { FC, ReactNode, useRef, useState } from 'react'
import { Link } from '@reach/router'
import classnames from 'classnames'
import { Menu } from './types'

// There is no rule that says all content has to be 100% accessible to all people —
// you just need to do what you can, and make your apps as accessible as possible.

// https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript
// https://www.w3.org/WAI/tutorials/menus/flyout/#flyoutnavkbbtn

// this menu assumes only one nested level max since it prevents over-complexity

// it also assumes all links are relative and internal

const ulClassNames = 'lstn pa0 ma0'
const liClassNames = 'pointer px2'

const itemClassNames = 'ff-averta c-text-light hov-c-primary-main fw700 pa2'

const mouseOutTimeout = 100

type MenuProps = { menu: Menu; className?: string }

export const DropdownMenu: FC<MenuProps> = ({ menu, className = '' }) => {
  const keys = Object.keys(menu)

  return (
    <nav aria-label="menu" className={className}>
      <ul className={ulClassNames}>
        {keys.map((k, i) => {
          const item = menu[k]
          return typeof item === 'string' ? (
            <DropdownItem
              key={i}
              name={k}
              url={item as string}
              className="dib"
            />
          ) : (
            <DropdownSubmenu key={i} title={k}>
              {Object.keys(item).map((sk, j) => (
                <DropdownItem
                  key={j}
                  name={sk}
                  url={item[sk] as string}
                  className="db"
                />
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
      className={classnames(liClassNames, 'posr dib')}
    >
      <button
        className={classnames('clearall', itemClassNames)}
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
      </button>
      <ul
        className={classnames(ulClassNames, 'posa pa1 bs2 bg-bg-main', {
          dn: !isOpen,
        })}
      >
        {children}
      </ul>
    </li>
  )
}

type ItemProps = {
  name: string
  url: string
  className?: string
}

const DropdownItem: FC<ItemProps> = ({ name, url, className }) => {
  return (
    <li className={classnames(liClassNames, itemClassNames, className)}>
      <Link to={url} className="db tdn c-inh" style={{ width: 'max-content' }}>
        {name}
      </Link>
    </li>
  )
}
