import React, { FC, useEffect, useState } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { MAADirectoryComponent } from 'components/MAADirectoryComponent'
import { MAALoginComponent } from 'components/MAALoginComponent'
import { Container } from 'components/Container'
import firebase from 'store/firebase'
import { Alumni } from 'store/types'

const auth = firebase.auth()
const db = firebase.firestore()

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
  const [alumni, setAlumni] = useState<Alumni[]>([])

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

  const handleGetData = () => {
    db.collection('alumni')
      .get()
      .then((snapshot) => {
        const alumniArr: Alumni[] = []
        snapshot.forEach((doc) => {
          alumniArr.push(doc.data() as Alumni)
        })
        setAlumni(alumniArr)
      })
      .catch((e) => console.log(e))
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
      <button onClick={handleGetData}>get data</button>
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
      </div>
    </Container>
  )
}
