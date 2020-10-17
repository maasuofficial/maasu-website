import React, { FC, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { LoginAuth, MAAComponentProps } from 'containers/MAAContainer'

type Props = RouteComponentProps &
  MAAComponentProps & {
    attemptLogin: (loginAuth: LoginAuth) => void
  }

export const MAALoginComponent: FC<Props> = ({ attemptLogin }) => {
  useDocumentTitle('MAASU Alumni Association')

  const [loginAuth, setLoginAuth] = useState<LoginAuth>({
    email: '',
    password: '',
  })

  const handleLoginAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginAuth({ ...loginAuth, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    attemptLogin(loginAuth)
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={loginAuth.email}
        onChange={handleLoginAuthChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={loginAuth.password}
        onChange={handleLoginAuthChange}
      />
      <button>Log In</button>
    </form>
  )
}
