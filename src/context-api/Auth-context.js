import React, { useState } from "react";
const AuthContext = React.createContext({
    token : '',
    isLoggedIn : false,
    login: (token) => {},
})
export const AuthContextProvider=(props)=>{
    
    const [token, setToken] = useState(localStorage.getItem('token'));
    const userLoggedIn = !!token;
    
    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)
    }
    
    const contextValue = {
        token : token,
        isLoggedIn : userLoggedIn,
        login : loginHandler,
    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;