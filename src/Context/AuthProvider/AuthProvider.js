import React, { createContext } from 'react';
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.Config';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    /* Google Login Provider */

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    /* LogOut Syestem */
    const logOut = () => {
        return signOut(auth)
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




    let authValue = { user, googleLogin, setUser, logOut }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;