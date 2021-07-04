import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDku-ywSTutonT2vFg-17kbRg0mEtJNtO0",
    authDomain: "whatsapp-clone-1d844.firebaseapp.com",
    projectId: "whatsapp-clone-1d844",
    storageBucket: "whatsapp-clone-1d844.appspot.com",
    messagingSenderId: "130872320058",
    appId: "1:130872320058:web:93f7763ae218dac1279503",
    measurementId: "G-7EG47D24X0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider()

  export {auth,provider} ;
  export default db;

