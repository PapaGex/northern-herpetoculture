import React from 'react';

import './authentificationPage.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const AuthenticationPage = () => (
    <div className='authentication'><SignIn /></div>
);

export default AuthenticationPage;


//firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in
//         var email = user.email;
//         // ...
//     } else {
//         // User is not signed in
//         // ...
//     }
// });
// firebase.auth().signInWithEmailAndPassword(email, password);

//