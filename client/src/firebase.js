import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAAbNv30Gg6QL0zMGDkoLGhT8DJDM9Glu0",
  authDomain: "farazi-shops.firebaseapp.com",
  projectId: "farazi-shops",
  storageBucket: "farazi-shops.appspot.com",
  messagingSenderId: "979915191594",
  appId: "1:979915191594:web:bf63c49a76955fe4d45a53",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();