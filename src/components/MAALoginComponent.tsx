import React, { FC, useState } from 'react'
import { Redirect, RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { LoginAuth, MAAComponentProps } from 'containers/MAAContainer'

type Props = RouteComponentProps &
  MAAComponentProps & {
    attemptLogin: (loginAuth: LoginAuth) => void
  }

export const MAALoginComponent: FC<Props> = ({
  attemptLogin,
  user,
  rootUrl,
}) => {
  useDocumentTitle('MAASU Alumni Association')

  const [loginAuth, setLoginAuth] = useState<LoginAuth>({
    email: '',
    password: '',
  })

  const handleLoginAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginAuth({ ...loginAuth, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    attemptLogin(loginAuth)
  }

  const isLoginDisabled = !loginAuth.email || !loginAuth.password

  return user ? (
    <Redirect noThrow to={rootUrl} />
  ) : (
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
      {/* TODO disable on login attempt */}
      <button disabled={isLoginDisabled}>Log In</button>
      {/* TODO display error on invalid login */}
    </form>
  )
}
