import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Button from "../../components/button";
import Origamis from "../../components/origamis";
import styles from "./index.module.css";

const ShareThoughtsPage = () =>{

    return (
        <PageLayout>
            <Heading value="Share your thoughts..."/>
            <textarea className={styles.textarea} placeholder="Type something..."/>
            <Button value="Post"/>
            <h2 className={styles.h2}>Last 3 post on your wall</h2>
            <Origamis length={3}/>
        </PageLayout>
    )
};

export default ShareThoughtsPage;