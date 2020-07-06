import React, { FC } from 'react'
import { Link } from '@reach/router'

// this menu assumes only one nested level
// max since it prevents over-complexity

// this menu also assumes all links are
// relative and internal

type Menu = {
  [key: string]: string | Menu
}

type Props = {
  menu: Menu
}

export const DropdownMenu: FC<Props> = ({ menu }) => {
  const keys = Object.keys(menu)

  const classNameListOuter = 'dib pointer'

  return (
    <nav aria-label="menu">
      <ul className="lstn pa0 ma0">
        {keys.map((k, i) => {
          const item = menu[k]
          return typeof item === 'string' ? (
            <li key={i} className={classNameListOuter}>
              <Link to={item as string}>{k}</Link>
            </li>
          ) : (
            <li key={i} className={classNameListOuter}>
              <button className="clearall pa0 ma0">{k}</button>
              <ul className="">
                {Object.keys(item).map((sk, j) => (
                  <li key={j}>
                    <Link to={item[sk] as string}>{sk}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
