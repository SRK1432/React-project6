import React, { useState } from "react";
const AuthContext = React.createContext({
    token : '',
    isLoggedIn : false,
    user : null,
    login: (token) => {},
    logout: () => {}
})
export const AuthContextProvider=(props)=>{
    
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState('');
    const userLoggedIn = !!token;
    
    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)
    }
    const logoutHanlder=()=>{
        localStorage.removeItem('token');
        setToken(null);
    }
    
    const contextValue = {
        token : token,
        user : user,
        isLoggedIn : userLoggedIn,
        login : loginHandler,
        logout : logoutHanlder
    }
    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;