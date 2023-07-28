import { useEffect, useState } from "react";
import React from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { },
});


const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem('loginStatus', true);
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('loginStatus');
        setIsLoggedIn(false);
    }
    useEffect(() => {
        let loginStatus = localStorage.getItem('loginStatus');
        if (loginStatus) {
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin : loginHandler,
                onLogout : logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;