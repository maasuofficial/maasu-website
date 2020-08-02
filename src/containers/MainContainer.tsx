import React, { FC, Fragment, ReactNode, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { fetchAllSheets } from 'store/aggregated'
import { HeaderComponent } from 'components/HeaderComponent'
import { FooterComponent } from 'components/FooterComponent'
import { ModalComponent } from 'components/ModalComponent'

type Props = RouteComponentProps & ReduxProps & { children?: ReactNode }

export const Main: FC<Props> = ({ fetchAllSheets, children }) => {
  useEffect(() => {
    fetchAllSheets()
  }, [fetchAllSheets])

  return (
    <Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
      <ModalComponent />
    </Fragment>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { fetchAllSheets }

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const MainContainer = connector(Main)
