import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import PublicationsPage from "./pages/publications";
import ShareThoughtsPage from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";

const Navigation = () =>{

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={PublicationsPage}/>
                    <Route path="/share-thoughts" component={ShareThoughtsPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </BrowserRouter>
        </>
    )
};

export default Navigation;