import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Input from "../../components/input";
import Button from "../../components/button";

const RegisterPage = () =>{

    return (
        <PageLayout>
            <Heading value="Register"/>
            <Input label="Email" type="text" id="email"/>
            <Input label="Password" type="password" id="password"/>
            <Input label="RePassword" type="password" id="rePassword"/>
            <Button value="Register"/>
        </PageLayout>
    )
};

export default RegisterPage;