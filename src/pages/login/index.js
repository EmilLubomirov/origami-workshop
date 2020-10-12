import React, {useContext, useState} from "react";
import {useHistory} from  "react-router-dom";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";
import AuthContext from "../../AuthContext";
import {authenticate} from "../../utils/auth";

const LoginPage = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(AuthContext);
    const history = useHistory();

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) =>{

        e.preventDefault();

        const url = "http://localhost:9999/api/user/login";
        const headers =  { 'Content-Type': 'application/json' };

        const body = JSON.stringify({
            username,
            password
        });

        authenticate(url, headers, body, async (response) =>{

            const {_id, username } = await response.json();

            context.login({
                id: _id,
                username
            });

           history.push('/share-thoughts');
        }, (e) => console.error(e))
    };

    return (
        <PageLayout>
            <Heading value="Login"/>
            <form>
                <Input label="Username" type="text" id="username" value={username}
                       onChange={handleUsernameChange}/>
                <Input label="Password" type="password" id="password" value={password}
                       onChange={handlePasswordChange}/>
                <Button type="submit" value="Login"
                        onClick={handleSubmit}/>
            </form>
        </PageLayout>
    )
};

export default LoginPage;