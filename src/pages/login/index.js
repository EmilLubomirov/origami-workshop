import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleEmailChange = (e) =>{

        this.setState({
            email: e.target.value
        })
    };

    handlePasswordChange = (e) =>{

        this.setState({
            password: e.target.value
        })
    };

    render() {

        const {
            email,
            password,
        } = this.state;

        return (
            <PageLayout>
                <Heading value="Login"/>
                <Input label="Email" type="text" id="email" value={email} onChange={this.handleEmailChange}/>
                <Input label="Password" type="password" id="password" value={password} onChange={this.handlePasswordChange}/>
                <Button value="Login"/>
            </PageLayout>
        )
    }
}

export default LoginPage;