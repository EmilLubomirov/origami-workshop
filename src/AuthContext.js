import React from "react";

const AuthContext = React.createContext({
    user: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

export default AuthContext;