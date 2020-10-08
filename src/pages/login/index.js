import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";
import AuthContext from "../../AuthContext";
import {authenticate} from "../../utils/auth";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsernameChange = (e) =>{

        this.setState({
            username: e.target.value
        })
    };

    handlePasswordChange = (e) =>{

        this.setState({
            password: e.target.value
        })
    };

    handleSubmit = async (e) =>{

        e.preventDefault();

        const {
            username,
            password
        } = this.state;


        const url = "http://localhost:9999/api/user/login";
        const headers =  { 'Content-Type': 'application/json' };

        const body = JSON.stringify({
            username,
            password
        });

        authenticate(url, headers, body, async (response) =>{

            const {_id, username } = await response.json();

            this.context.login({
                id: _id,
                username
            });

            this.props.history.push('/');
        }, (e) => console.error(e))
    };

    render() {

        const {
            username,
            password,
        } = this.state;

        return (
            <PageLayout>
                <Heading value="Login"/>
                <form>
                    <Input label="Username" type="text" id="username" value={username} onChange={this.handleUsernameChange}/>
                    <Input label="Password" type="password" id="password" value={password} onChange={this.handlePasswordChange}/>
                    <Button type="submit" value="Login" onClick={this.handleSubmit}/>
                </form>
            </PageLayout>
        )
    }
}

LoginPage.contextType = AuthContext;
export default LoginPage;