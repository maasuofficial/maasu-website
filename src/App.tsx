import React, { useEffect, useState } from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import firebase from './firebase'
import './App.css'

function useSchools() {
  const [schools, setSchools] = useState<{ name: string }[]>([]);

  useEffect(() => {
    firebase.firestore().collection('schools')
      .onSnapshot((snapshot) => {
        const schoolArr = snapshot.docs
        .map((doc) => {
          return {
            name: doc.data().name,
          }
        });
        setSchools(schoolArr);
      });
  }, []);

  return schools;
}

const Home = (props: RouteComponentProps) => <div>This is the home page</div>;

const History = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const Mission = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const Board = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Members = (props: RouteComponentProps) => {
  const schools = useSchools();
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

const Upcoming = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const Host = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const PastConferences = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Programs = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Awards = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const Organizations = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const PastAwards = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Alumni = (props: RouteComponentProps) => {
  const [signUp, setSignUp] = useState<{ username: string, password: string }>({ username: '', password: '' });

  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(JSON.stringify(signUp, null, 2));

    const { username, password } = signUp;
    
    firebase.auth()
    .createUserWithEmailAndPassword(username, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignUp({
      ...signUp,
      username: e.target.value,
    });
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSignUp({
      ...signUp,
      password: e.target.value,
    });
  }

  return (
    <div>
      <h1>hello!</h1>

      <form onSubmit={onSubmit}>
        <input onChange={onChangeUsername} />
        <input onChange={onChangePassword} />
        <button>sign up</button>
      </form>
    </div>
  );
}

const Statements = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const Newsletter = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Join = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const ECC = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const DC = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const BOA = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;
const ED = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Contact = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Donate = (props: RouteComponentProps) => <div>This is a generic reach router page</div>;

const Error = (props: RouteComponentProps) => <div>404 Error.</div>;

function App() {
  return (
      <Router>
        <Home path='/' />

        {/* about */}

        <History path='/history' />
        <Mission path='/mission' />
        <Board path='/board' />
        <Members path='/members' />

        {/* conferences */}

        <Upcoming path='/upcoming' />
        <Host path='/host' />
        <PastConferences path='/past-conferences' />

        {/* programs */}

        <Programs path='/programs' />

        {/* resources */}

        <Awards path='/awards' />
        <Organizations path='/organizations' />
        <PastAwards path='/past-awards' />

        {/* alumni */}

        <Alumni path='/alumni' />

        {/* news */}

        <Statements path='/statements' />
        <Newsletter path='/newsletter' />

        {/* get involved */}

        <Join path='/join' />
        <ECC path='/ECC' />
        <DC path='/DC' />
        <BOA path='/BOA' />
        <ED path='/ED' />

        {/* contact */}

        <Contact path='/contact' />

        {/* donate */}

        <Donate path='/donate' />

        {/* 404 */}

        <Error default />
      </Router>
  )
}

export default App
