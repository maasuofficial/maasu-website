import React, { useEffect, useState } from 'react'
import './App.css'

import firestore from './firestore';

function useSchools() {
  const [schools, setSchools] = useState<{ name: string }[]>([]);

  useEffect(() => {
    firestore.collection('schools')
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

  return (
    <div className="App">
      <h1>hello!</h1>

      {schools.map((s, index) => {
        return <p key={index}>{s.name}</p>
      })}
      
    </div>
  );
}

export default App;
