import React, { FC, useEffect, useState } from 'react'
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

type Props = {}

export type MAAComponentProps = {
  auth: firebase.auth.Auth
  user: firebase.User | null
  rootUrl: string
}

export const MAAContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('MAASU Alumni Association')

  const [user, setUser] = useState(() => auth.currentUser)
  const [isLoading, setIsLoading] = useState(true)

  const componentProps = {
    auth,
    user,
    rootUrl: '/maa',
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user signed in
        setUser(user)
        /* console.log('signed in') */
      } else {
        // user not signed in
        setUser(null)
        /* console.log('signed out') */
      }

      if (isLoading) setIsLoading(false)
    })
  }, [isLoading])

  const attemptLogin = (loginAuth: LoginAuth) => {
    const { email, password } = loginAuth
    auth.signInWithEmailAndPassword(email, password)
  }

  return (
    <Container>
      {isLoading ? (
        <span>LOADING...</span>
      ) : (
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
      )}
    </Container>
  )
}
