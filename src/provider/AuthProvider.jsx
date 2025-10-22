import React, {  createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    console.log(user);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    },[])
    const authData={
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;