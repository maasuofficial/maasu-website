import React, { useEffect, useState } from 'react'
import { Link, Router, RouteComponentProps } from '@reach/router'
import firebase from './firebase'
import './App.css'

function useSchools() {
  const [schools, setSchools] = useState<{ name: string }[]>([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('schools')
      .onSnapshot((snapshot) => {
        const schoolArr = snapshot.docs.map((doc) => {
          return {
            name: doc.data().name,
          }
        })
        setSchools(schoolArr)
      })
  }, [])

  return schools
}

const Home = (props: RouteComponentProps) => (
  <div>
    This is the home page and <Link to="/alumni">here is the alumni page</Link>.
  </div>
)

const History = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const Mission = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const Board = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Members = (props: RouteComponentProps) => {
  const schools = useSchools()
  return (
    <div>
      <h1>Members</h1>
      <div>
        {schools.map((s, index) => {
          return <p key={index}>{s.name}</p>
        })}
      </div>
    </div>
  )
}

const Upcoming = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const Host = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const PastConferences = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Programs = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Awards = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const Organizations = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const PastAwards = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Alumni = (props: RouteComponentProps) => {
  const [signIn, setSignIn] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  })
  const [signUp, setSignUp] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  })

  const useUser = () => {
    const [user, setUser] = useState<{ uid: string }>({ uid: '' })

    useEffect(() => {
      let uid = ''
      firebase.auth().onAuthStateChanged(function (authuser) {
        if (authuser) {
          uid = authuser.uid
        } else {
          uid = ''
        }
        setUser({ uid })
        console.log('auth state changed.')
      })
    }, [])

    return user
  }

  const useAlumni = () => {
    const [alumni, setAlumni] = useState<{ uid: string }[]>([])

    // useEffect
    useEffect(() => {
      firebase
        .firestore()
        .collection('alumni')
        .onSnapshot((snapshot) => {
          const alumniArr = snapshot.docs.map((doc) => {
            return {
              uid: doc.data().uid,
            }
          })
          setAlumni(alumniArr)
        })
    }, [])

    return alumni
  }

  const user = useUser()
  const alumni = useAlumni()

  function onSubmitSignIn(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const { username, password } = signIn

    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  function onSubmitSignUp(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const { username, password } = signUp

    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        return firebase.auth().currentUser
      })
      .then((user) => {
        if (user && user.uid) {
          console.log(user.uid)
          firebase
            .firestore()
            .collection('alumni')
            .doc(user.uid)
            .set({
              uid: user.uid,
            })
            .catch((e) => {
              console.log(e)
            })
        }
      })
      .catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const onChangeUsernameSignIn = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignIn({
      ...signIn,
      username: e.target.value,
    })
  }

  const onChangePasswordSignIn = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignIn({
      ...signIn,
      password: e.target.value,
    })
  }
  const onChangeUsernameSignUp = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignUp({
      ...signUp,
      username: e.target.value,
    })
  }

  const onChangePasswordSignUp = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSignUp({
      ...signUp,
      password: e.target.value,
    })
  }

  const onClickSignOut = (e: React.MouseEvent<HTMLButtonElement>): void => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('signed out.')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      {user.uid ? <p>user {user.uid}</p> : <p>You are not signed in</p>}

      <h1>sign in</h1>
      <form onSubmit={onSubmitSignIn}>
        <input onChange={onChangeUsernameSignIn} />
        <input onChange={onChangePasswordSignIn} />
        <button>sign in</button>
      </form>

      <h1>sign up</h1>
      <form onSubmit={onSubmitSignUp}>
        <input onChange={onChangeUsernameSignUp} />
        <input onChange={onChangePasswordSignUp} />
        <button>sign up</button>
      </form>

      <button onClick={onClickSignOut}>Sign out</button>

      <div>
        <h2>directory</h2>

        <ul>
          {alumni.map((a, index) => (
            <li key={index}>{a.uid}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Statements = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const Newsletter = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Join = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const ECC = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const DC = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const BOA = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)
const ED = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Contact = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Donate = (props: RouteComponentProps) => (
  <div>This is a generic reach router page</div>
)

const Error = (props: RouteComponentProps) => <div>404 Error.</div>

function App() {
  return (
    <Router>
      <Home path="/" />

      {/* about */}

      <History path="/history" />
      <Mission path="/mission" />
      <Board path="/board" />
      <Members path="/members" />

      {/* conferences */}

      <Upcoming path="/upcoming" />
      <Host path="/host" />
      <PastConferences path="/past-conferences" />

      {/* programs */}

      <Programs path="/programs" />

      {/* resources */}

      <Awards path="/awards" />
      <Organizations path="/organizations" />
      <PastAwards path="/past-awards" />

      {/* alumni */}

      <Alumni path="/alumni" />

      {/* news */}

      <Statements path="/statements" />
      <Newsletter path="/newsletter" />

      {/* get involved */}

      <Join path="/join" />
      <ECC path="/ECC" />
      <DC path="/DC" />
      <BOA path="/BOA" />
      <ED path="/ED" />

      {/* contact */}

      <Contact path="/contact" />

      {/* donate */}

      <Donate path="/donate" />

      {/* 404 */}

      <Error default />
    </Router>
  )
}

export default App
