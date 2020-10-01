import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import styles from "./index.module.css";

const ErrorPage = () =>{

    return (
        <PageLayout>
            <Heading className={styles["four-o-four"]} value="Something went wrong..."/>
        </PageLayout>
    )
};

export default ErrorPage;