import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import firebase from './firebase';

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

function App() {
  const schools = useSchools();
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
    <BrowserRouter>
      <div className="App">
        <h1>hello!</h1>

        {schools.map((s, index) => {
          return <p key={index}>{s.name}</p>
        })}

        <form onSubmit={onSubmit}>
          <input onChange={onChangeUsername} />
          <input onChange={onChangePassword} />
          <button>sign up</button>
        </form>

        <Switch>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
