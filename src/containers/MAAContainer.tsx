import React, { FC, useEffect, useState } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { useDocumentTitle } from 'hooks/meta'
import { MAADirectoryComponent } from 'components/MAADirectoryComponent'
import { MAALoginComponent } from 'components/MAALoginComponent'
import { fetchAlumni, clearAlumni } from 'store/actions'
import { getAlumni, getIsFetchingAlumni, getAlumniError } from 'store/selectors'
import { Container } from 'components/Container'
import { AppState } from 'store/types'
import firebase from 'store/firebase'
import { Alumni } from 'store/Alumni/types'

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

export const MAA: FC<RouteComponentProps & ReduxProps & Props> = ({
  fetchAlumni,
  clearAlumni,
  isFetchingAlumni,
  alumni,
  alumniError,
}) => {
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
        fetchAlumni()
      } else {
        // user not signed in
        setUser(null)
        clearAlumni()
      }

      if (isLoading) setIsLoading(false)
    })
  }, [fetchAlumni, clearAlumni, isLoading])

  const attemptLogin = (loginAuth: LoginAuth) => {
    const { email, password } = loginAuth
    auth.signInWithEmailAndPassword(email, password)
  }

  return (
    <Container>
      {isLoading || isFetchingAlumni ? (
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
      <p>alumni:</p>
      <div>
        {alumni.map((alumnus: Alumni, index) => {
          const { fname, lname } = alumnus
          return (
            <p key={index}>
              {fname} {lname}
            </p>
          )
        })}
        {alumniError}
      </div>
    </Container>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingAlumni: getIsFetchingAlumni(state),
  alumni: getAlumni(state),
  alumniError: getAlumniError(state),
})

const mapDispatchToProps = {
  fetchAlumni,
  clearAlumni,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const MAAContainer = connector(MAA)
