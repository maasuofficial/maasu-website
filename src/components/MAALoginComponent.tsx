import React, { FC } from 'react'
import { useDocumentTitle } from 'hooks/meta'
import { MAAComponentProps } from 'containers/MAAContainer'

type Props = MAAComponentProps & {
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
