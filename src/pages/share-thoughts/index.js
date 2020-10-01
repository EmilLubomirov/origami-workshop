import React from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Button from "../../components/button";
import styles from "./index.module.css";
import Origamis from "../../components/origamis";

const ShareThoughtsPage = () =>{

    return (
        <PageLayout>
            <Heading value="Share your thoughts..."/>
            <textarea className={styles.textarea} placeholder="Type something..."></textarea>
            <Button value="Post"/>
            {/*<h3>*/}
            {/*    Last 3 post on your wall*/}
            {/*</h3>*/}

            <Origamis length={3}/>
        </PageLayout>
    )
};

export default ShareThoughtsPage;