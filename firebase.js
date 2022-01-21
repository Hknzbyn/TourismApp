// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtmRTr9AZwfPxTcKLivmsVhJSoTXn3mA4',
  authDomain: 'tourismapp-b7650.firebaseapp.com',
  projectId: 'tourismapp-b7650',
  storageBucket: 'tourismapp-b7650.appspot.com',
  messagingSenderId: '61830670637',
  appId: '1:61830670637:web:9530f4f94d912c9f570ba4',
  measurementId: 'G-9LCCW9KRVB',
};

//Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
