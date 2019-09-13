import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOSL2jvvGNO0maRb-To2eF3xm2dGuuviE",
  authDomain: "crwn-db-f49e7.firebaseapp.com",
  databaseURL: "https://crwn-db-f49e7.firebaseio.com",
  projectId: "crwn-db-f49e7",
  storageBucket: "",
  messagingSenderId: "310197375771",
  appId: "1:310197375771:web:ec4f80d9ccdb9d3d12b9be"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
