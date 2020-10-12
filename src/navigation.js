import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import PublicationsPage from "./pages/publications";
import ShareThoughtsPage from "./pages/share-thoughts";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";
import AuthContext from "./AuthContext";
import ProfilePage from "./pages/profile";
import { getLoggedInUser } from "./utils/auth";

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            isLoggedIn: undefined,
            login: this.login,
            logout: this.logout
        }
    }

    login = (user) =>{

        this.setState({
            user,
            isLoggedIn: true
        })
    };

    logout = () =>{
      this.setState({
          user: null,
          isLoggedIn: false
      })
    };

    checkUserStatus = async () =>{
        const user = await getLoggedInUser();
        const isLoggedIn = !!user;

        this.setState({
            user,
            isLoggedIn
        })
    };

    componentDidMount() {
        this.checkUserStatus();
    }

    render() {

        return (
            <AuthContext.Provider value={this.state}>
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
    }
}

export default Navigation;