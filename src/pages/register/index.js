import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";

class RegisterPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            rePassword: "",
        }
    }

    handleUsernameChange = (e) =>{

        const username = e.target.value;

        this.setState({
            username,
        })
    };

    handlePasswordChange = (e) =>{

        const password = e.target.value;

        this.setState({
            password,
        })
    };

    handleRePasswordChange = (e) =>{

        const rePassword = e.target.value;

        this.setState({
            rePassword,
        })
    };

    handleSubmit = (e) =>{

        e.preventDefault();

        const {
            username,
            password,
        } = this.state;

        fetch("http://localhost:9999/api/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => {

            if (response.status === 200){
                this.props.history.push('/login');
            }
        })
    };

    render() {

        const {
            username,
            password,
            rePassword,
        } = this.state;

        return (
            <PageLayout>
                <Heading value="Register"/>
                <form>
                    <Input label="Username" type="text" id="username" value={username} name="username" onChange={this.handleUsernameChange}/>
                    <Input label="Password" type="password" id="password" value={password} name="password" onChange={this.handlePasswordChange}/>
                    <Input label="RePassword" type="password" id="rePassword" value={rePassword} name="rePassword" onChange={this.handleRePasswordChange}/>
                    <Button type="submit" value="Register" onClick={this.handleSubmit}/>
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage;