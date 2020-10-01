import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import PublicationsPage from "./pages/PublicationsPage";

const Navigation = () =>{

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={PublicationsPage}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
};

export default Navigation;