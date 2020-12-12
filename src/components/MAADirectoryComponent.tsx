import React, { FC } from 'react'
import { Redirect, RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAAComponentProps } from 'containers/MAAContainer'

type Props = RouteComponentProps & MAAComponentProps & {}

export const MAADirectoryComponent: FC<Props> = ({ auth, user, rootUrl }) => {
  useDocumentTitle('MAASU Alumni Association')

  const handleSignOut = () => {
    auth.signOut()
  }

  return !user ? (
    <Redirect noThrow to={`${rootUrl}/login`} />
  ) : (
    <div>
      <h2>user id={user.uid}</h2>
      <span>insert directory here</span>
      <button onClick={handleSignOut}>(temporary) sign out</button>
    </div>
  )
}
