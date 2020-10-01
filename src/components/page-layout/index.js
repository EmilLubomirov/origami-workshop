import React from "react";
import Header from "../header";
import Aside from "../aside";
import Footer from "../footer";
import styles from "./index.module.css";

const PageLayout = (props) =>{

    return (
        <>
            <Header/>
            <Aside/>
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer/>
        </>
    )
};

export default PageLayout;