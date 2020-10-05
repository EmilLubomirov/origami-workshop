import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import PublicationsPage from "./pages/publications";
import ShareThoughtsPage from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";
import AuthContext from "./AuthContext";
import ProfilePage from "./pages/profile";
import { getCookie } from "./utils/cookie";

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        const isLoggedIn = getCookie('x-auth-token');

        this.state = {
            isLoggedIn,
            login: this.login,
            logout: this.logout
        }
    }

    login = () =>{
        this.setState({
            isLoggedIn: true
        })
    };

    logout = () =>{
      this.setState({
          isLoggedIn: false
      })
    };

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={PublicationsPage}/>
                        <Route path="/share-thoughts" component={ShareThoughtsPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </BrowserRouter>
            </AuthContext.Provider>
        )
    }
}

export default Navigation;