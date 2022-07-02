import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDN3qCnHEXdF0_F9Kgijep3W-YEkAME988",
    authDomain: "botgram-d2bc0.firebaseapp.com",
    projectId: "botgram-d2bc0",
    storageBucket: "botgram-d2bc0.appspot.com",
    messagingSenderId: "591392437514",
    appId: "1:591392437514:web:602a75a96693bc2af536f3"
  }).auth();