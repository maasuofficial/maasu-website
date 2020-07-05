import React, { FC } from 'react'
import { Link } from '@reach/router'
import { findAsset } from 'utils/files'
import { DropdownMenu } from 'components/DropdownMenu'
import { APP_NAME_LONG } from 'constants/strings'
import { MENU } from 'constants/menu'

interface Props {}

export const HeaderComponent: FC<Props> = () => {
  return (
    <header className="w-100 bgc-bg-main bgc-red">
      <div className="container df">
        <Link to="/">
          <img
            src={findAsset('branding/light/text.svg')}
            alt={APP_NAME_LONG}
            className="pa2"
          />
        </Link>
        <DropdownMenu menu={MENU} />
      </div>
    </header>
  )
}
