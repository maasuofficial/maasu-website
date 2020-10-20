import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const API_KEY = 'AIzaSyC1mWbzgj5MCn2LkBryQ9TExg1-cCIjkP8'
const PROJECT_ID = 'maasu-master'
const SENDER_ID = '98498285915'
const APP_ID = '1:98498285915:web:d47dc5c41080b420750a7e'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
}

firebase.initializeApp(firebaseConfig)

export default firebase
