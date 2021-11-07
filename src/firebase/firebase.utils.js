import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8PrhLaB_EvwHG5p31DY75NsDBUcvxAVA",
    authDomain: "northern-herpetoculture-2cb73.firebaseapp.com",
    projectId: "northern-herpetoculture-2cb73",
    storageBucket: "northern-herpetoculture-2cb73.appspot.com",
    messagingSenderId: "439823067096",
    appId: "1:439823067096:web:1f0fff265d1b49f27134ad",
    measurementId: "G-7MT56EJB4R"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

