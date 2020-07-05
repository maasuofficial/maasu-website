import React, { FC } from 'react'
import { findAsset } from 'utils/files'
import { APP_NAME_LONG } from 'constants/strings'

interface Props {}

export const HeaderComponent: FC<Props> = () => {
  return (
    <header className="w-100 bgc-bg-main bgc-red">
      <div className="container df">
        <img
          src={findAsset('branding/light/text.svg')}
          alt={APP_NAME_LONG}
          className="pa2"
        />
        <nav className="df">
          <ul className="lstn dib pa0 ma0">
            {[...Array(10)].map((_, i) => (
              <li key={i} className="di">
                test
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
