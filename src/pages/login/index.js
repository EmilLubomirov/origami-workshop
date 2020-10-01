import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";

const LoginPage = () =>{

    return (
        <PageLayout>
            <Heading value="Login"/>
            <Input label="Email" type="text" id="email"/>
            <Input label="Password" type="password" id="password"/>
            <Button value="Login"/>
        </PageLayout>
    )
};

export default LoginPage;