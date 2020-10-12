import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";

const RegisterPage = () =>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const history = useHistory();

    const handleUsernameChange = (e) =>{
       setUsername(e.target.value);
    };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
     };

     const handleRePasswordChange = (e) =>{
         setRePassword(e.target.value);
    };

    const handleSubmit = (e) =>{

        e.preventDefault();

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
                history.push('/login');
            }
        })
    };

    return (
        <PageLayout>
            <Heading value="Register"/>
            <form>
                <Input label="Username" type="text" id="username" value={username} name="username"
                       onChange={handleUsernameChange}/>
                <Input label="Password" type="password" id="password" value={password} name="password"
                       onChange={handlePasswordChange}/>
                <Input label="RePassword" type="password" id="rePassword" value={rePassword} name="rePassword"
                       onChange={handleRePasswordChange}/>
                <Button type="submit" value="Register"
                        onClick={handleSubmit}/>
            </form>
        </PageLayout>
    )
};

export default RegisterPage;