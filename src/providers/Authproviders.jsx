import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
const auth = getAuth(app);
const googleauthprovider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const Authproviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const SignInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleauthprovider);
    }

    const updateUserData = (name,photoUrl,currentUser) => {
        return updateProfile(currentUser, {
            displayName: name, photoURL:photoUrl
          })
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //observe auth state change
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            console.log("Auth state change",currentuser);
            setUser(currentuser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])
    
    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        updateUserData,
        SignInWithGoogle
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authproviders;