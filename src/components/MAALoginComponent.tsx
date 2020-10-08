import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAAComponentProps } from 'containers/MAAContainer'

type Props = RouteComponentProps &
  MAAComponentProps & {
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => void
  }

export const MAALoginComponent: FC<Props> = ({ handleLogin }) => {
  useDocumentTitle('MAASU Alumni Association')

  return (
    <form method="POST" onSubmit={handleLogin}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log In</button>
    </form>
  )
}
