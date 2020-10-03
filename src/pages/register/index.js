import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";

class RegisterPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            rePassword: ""
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

    handleRePasswordChange = (e) =>{

        this.setState({
            rePassword: e.target.value
        })
    };

    render() {

        const {
            email,
            password,
            rePassword
        } = this.state;

        return (
            <PageLayout>
                <Heading value="Register"/>
                <Input label="Email" type="text" id="email" value={email} onChange={this.handleEmailChange}/>
                <Input label="Password" type="password" id="password" value={password} onChange={this.handlePasswordChange}/>
                <Input label="RePassword" type="password" id="rePassword" value={rePassword} onChange={this.handleRePasswordChange}/>
                <Button value="Register"/>
            </PageLayout>
        )
    }
}

export default RegisterPage;