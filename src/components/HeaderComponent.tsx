import React, { FC, Fragment } from 'react'
import { Link } from '@reach/router'
import { getLogo } from 'utils/files'
import { DropdownMenu } from 'components/menu/DropdownMenu'
import { ModalMenu } from 'components/menu/ModalMenu'
import { APP_NAME_LONG } from 'constants/strings'
import { HEADER_HEIGHT, LOGO_HEIGHT } from 'constants/numeric'
import { MENU } from 'constants/menu'

interface Props {}

export const HeaderComponent: FC<Props> = () => {
  return (
    <Fragment>
      <header className="w-100 bg-bg-main posf z1">
        <div className="container">
          <div
            className="df ai-c jc-sb px4-nl"
            style={{ height: HEADER_HEIGHT }}
          >
            <Link to="/" className="df ai-c">
              <img
                src={getLogo()}
                alt={APP_NAME_LONG}
                style={{ height: LOGO_HEIGHT }}
              />
            </Link>
            <DropdownMenu menu={MENU} className="dn db-l" />
            <ModalMenu
              menu={MENU}
              triggerClassNames="db dn-l"
              menuClassNames="db dn-l bg-bg-main"
            />
          </div>
        </div>
      </header>
      <div aria-hidden="true" style={{ minHeight: HEADER_HEIGHT }} />
    </Fragment>
  )
}
