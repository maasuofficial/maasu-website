import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
/* import { HeaderComponent } from 'components/HeaderComponent' */
import { FooterComponent } from 'components/FooterComponent'

type Props = RouteComponentProps & { children: React.ReactNode }

export const MainContainer: FC<Props> = ({ children }) => {
  return (
    <div>
      {/* <HeaderComponent /> */}
      <div>{children}</div>
      <FooterComponent />
    </div>
  )
}
