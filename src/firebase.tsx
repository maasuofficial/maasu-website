import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYZYkSA8RpuN_dTPVSIFs7A8F-XnZydQE",
  authDomain: "maasu-6feb2.firebaseapp.com",
  databaseURL: "https://maasu-6feb2.firebaseio.com",
  projectId: "maasu-6feb2",
  storageBucket: "maasu-6feb2.appspot.com",
  messagingSenderId: "157203546075",
  appId: "1:157203546075:web:dc2c8351d9e610f82871fe"
};

firebase.initializeApp(firebaseConfig);

export default firebase
