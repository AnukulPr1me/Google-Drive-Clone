const firebaseConfig = {
    apiKey: "AIzaSyD0KfkLd49dL0XVh09fNYVPKnkd-5AKekQ",
    authDomain: "drive-clone-4b4ed.firebaseapp.com",
    projectId: "drive-clone-4b4ed",
    storageBucket: "drive-clone-4b4ed.appspot.com",
    messagingSenderId: "1016665986419",
    appId: "1:1016665986419:web:809c59d98e3f2f089ce106",
    measurementId: "G-E3E15VDJS8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthprovider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth, provider, db, storage}