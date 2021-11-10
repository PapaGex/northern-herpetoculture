import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {

    apiKey: "AIzaSyByz76MBfBvR3VNi7aN0eTdh_48lC7h-5E",

    authDomain: "northern-herp-webstore.firebaseapp.com",

    projectId: "northern-herp-webstore",

    storageBucket: "northern-herp-webstore.appspot.com",

    messagingSenderId: "985791506486",

    appId: "1:985791506486:web:0996bf8af94d6934985097",

    measurementId: "G-RQWH9QL91T"

};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =  await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

