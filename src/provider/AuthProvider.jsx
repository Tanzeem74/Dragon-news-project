import React, {  createContext, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext=createContext();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(
        {
            name:'ab',
            email:'ab@cd.com'
        }
    );
    const authData={
        user,
        setUser
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;