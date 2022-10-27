import React, { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.Config';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [error, setError] = useState("")

    /* Google Login Provider */

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    /* LogOut Syestem */
    const logOut = () => {
        return signOut(auth)
    }

    /* Email Password Create account Syestem */

    const emailPasswordCreateAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Email Login Password */
    const emailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* User Set In Outside Call */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("state Change");
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])




    let authValue = { user, googleLogin, emailPasswordLogin, setUser, logOut, emailPasswordCreateAccount, error, setError }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;