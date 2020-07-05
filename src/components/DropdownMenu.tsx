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

  return (
    <nav>
      {keys.map((k, i) => {
        const item = menu[k]
        return typeof item === 'string' ? (
          <Link to={item as string} key={i}>
            {k}
          </Link>
        ) : (
          <div key={i}>
            {Object.keys(item).map((sk, j) => (
              <Link to={item[sk] as string} key={j}>
                {sk}
              </Link>
            ))}
          </div>
        )
      })}
    </nav>
  )
}
