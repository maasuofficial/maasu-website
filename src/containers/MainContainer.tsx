import { Fragment, ReactNode } from 'react'
import { RouteComponentProps } from '@reach/router'
import { HeaderComponent } from '../components/HeaderComponent'
import { FooterComponent } from '../components/FooterComponent'
import { ModalComponent } from '../components/ModalComponent'

type Props = RouteComponentProps & { children?: ReactNode }

export function MainContainer({ children }: Props) {
  return (
    <Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
      <ModalComponent />
    </Fragment>
  )
}
