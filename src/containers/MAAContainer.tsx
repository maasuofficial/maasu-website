import React, { FC, useState } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAADirectoryComponent } from 'components/MAADirectoryComponent'
import { MAALoginComponent } from 'components/MAALoginComponent'
import { Container } from 'components/Container'
import firebase from 'store/firebase'

const auth = firebase.auth()

export type LoginAuth = {
  email: string
  password: string
}

export type User = {
  id: string | null
}

type Props = {}

export type MAAComponentProps = {
  user: User
  rootUrl: string
}

export const MAAContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('MAASU Alumni Association')

  const [user] = useState<User>({ id: null })

  auth.onAuthStateChanged((user) => {
    if (user) {
      // user signed in
    } else {
      // user not signed in
    }
  })

  const attemptLogin = (loginAuth: LoginAuth) => {
    /* const { email, password } = loginAuth */
  }

  const componentProps = {
    user,
    rootUrl: '/maa',
  }

  return (
    <Container>
      <Router>
        {/* login */}
        <MAALoginComponent
          path="/login"
          {...componentProps}
          attemptLogin={attemptLogin}
        />

        {/* directory */}
        <MAADirectoryComponent default {...componentProps} />
      </Router>
    </Container>
  )
}
