import React, { FC } from 'react'
import { Redirect, RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAAComponentProps } from 'containers/MAAContainer'

type Props = RouteComponentProps & MAAComponentProps & {}

export const MAADirectoryComponent: FC<Props> = ({ user, rootUrl }) => {
  useDocumentTitle('MAASU Alumni Association')

  return !user.id ? (
    <Redirect noThrow to={`${rootUrl}/login`} />
  ) : (
    <div>
      <h2>user is {JSON.stringify(user)}</h2>
      <span>insert directory here</span>
    </div>
  )
}
