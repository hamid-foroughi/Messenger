import React from 'react';
import firebase from 'firebase/app'
import { auth } from '../firebase';


import styles from '../components/Login.module.css'

//Icons
import googleLogo from '../assets/google.png';
const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Wellcome to Botgram</h2>
                <div 
                    className={styles.button}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={googleLogo} alt='google'/> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;