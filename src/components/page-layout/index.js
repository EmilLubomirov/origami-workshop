import React from "react";
import Header from "../header";
import Aside from "../aside";
import Footer from "../footer";

const PageLayout = (props) =>{

    return (
        <>
            <Header/>
            <Aside/>
            {props.children}
            <Footer/>
        </>
    )
};

export default PageLayout;