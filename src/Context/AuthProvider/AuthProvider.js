import React, { createContext } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import App from '../../App';

export const AuthContext = createContext()

// const auth = getAuth(App);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({ displayName: "Sohel Rana" })

    /* Google Login System */
    const provider = new GoogleAuthProvider();

    // const googleSignIn = () => {
    //     return signInWithPopup(auth, provider)
    // }


    let authValue = { user }
    return (
        <div>
            <AuthContext.Provider value={authValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;