import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
/* import { HeaderContainer } from 'containers/HeaderContainer' */
/* import { FooterContainer } from 'containers/FooterContainer' */

type Props = RouteComponentProps & { children: React.ReactNode }

export const MainContainer: FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <HeaderContainer /> */}
      <div>{children}</div>
      {/* <FooterContainer /> */}
    </div>
  )
}
