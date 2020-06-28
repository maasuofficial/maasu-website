import React, { FC } from 'react'
/* import { RouteComponentProps, useParams } from '@reach/router' */
import { useParams } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
/* import { AppState } from 'store/types' */
import { useDocumentTitle } from 'hooks/meta'

/* type Props = RouteComponentProps & ReduxProps & {} */
type Props = ReduxProps & {}

export const BoardMember: FC<Props> = () => {
  useDocumentTitle('TODO board member')
  const params = useParams()

  return (
    <div className="container pt6">
      <span>{params.name}</span>
    </div>
  )
}

/* const mapStateToProps = (state: AppState) => ({}) */

/* const mapDispatchToProps = {} */

/* const connector = connect(mapStateToProps, mapDispatchToProps) */
const connector = connect()
type ReduxProps = ConnectedProps<typeof connector>

export const BoardMemberContainer = connector(BoardMember)
