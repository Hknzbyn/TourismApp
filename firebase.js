
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: 'AIzaSyDtmRTr9AZwfPxTcKLivmsVhJSoTXn3mA4',
  authDomain: 'tourismapp-b7650.firebaseapp.com',
  projectId: 'tourismapp-b7650',
  storageBucket: 'tourismapp-b7650.appspot.com',
  messagingSenderId: '61830670637',
  appId: '1:61830670637:web:9530f4f94d912c9f570ba4',
  measurementId: 'G-9LCCW9KRVB',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.database();
const auth = firebase.auth();

const database = getDatabase();

export { db, auth, database };


