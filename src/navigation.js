import React, {useCallback, useContext, useEffect, useState} from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import PublicationsPage from "./pages/publications";
import ShareThoughtsPage from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";
import AuthContext from "./AuthContext";
import ProfilePage from "./pages/profile";
import { getLoggedInUser } from "./utils/auth";

const Navigation = () =>{

    const [state, setState] = useState({
        user: undefined,
        isLoggedIn: undefined,
        login: (user) =>{
            setState({
                ...state,
                user: user,
                isLoggedIn: true
            });
        },
        logout: () =>{
            setState({
                ...state,
                user: null,
                isLoggedIn: false
            });
        }
    });

    const checkUserStatus = useCallback(async () =>{
        const currentUser = await getLoggedInUser();
        const isUserLoggedIn = !!currentUser;

        setState({
            ...state,
            user: currentUser,
            isLoggedIn: isUserLoggedIn
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() =>{
        checkUserStatus();
    }, [checkUserStatus]);

    return (
        <AuthContext.Provider value={state}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={PublicationsPage}/>
                    <Route path="/share-thoughts" component={ShareThoughtsPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/profile/:id" component={ProfilePage}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
    )
};


export default Navigation;