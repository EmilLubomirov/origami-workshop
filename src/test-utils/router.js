import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import AuthContext from "../AuthContext";

const TestingEnvironment = ({ value, children }) =>{

    return(
        <BrowserRouter>
            <Route>
                <AuthContext.Provider value={value}>
                    {children}
                </AuthContext.Provider>
            </Route>
        </BrowserRouter>
    )
};

export default TestingEnvironment;