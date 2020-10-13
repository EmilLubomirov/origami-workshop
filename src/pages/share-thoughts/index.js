import React, {useState, useContext} from "react";
import PageLayout from "../../components/page-layout";
import Heading from "../../components/heading";
import Button from "../../components/button";
import TextArea from "../../components/textarea";
import Origamis from "../../components/origamis";
import styles from "./index.module.css";
import AuthContext from "../../AuthContext";
import {getCookie} from "../../utils/cookie";

const ShareThoughtsPage = () =>{

    const [description, setDescription] = useState("");
    const [updatedOrigami, setUpdatedOrigami] = useState([]);

    const context = useContext(AuthContext);

    const handleChange = (e) =>{
        setDescription(e.target.value);
    };

    const handleClick = () =>{

        fetch('http://localhost:9999/api/origami', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: getCookie('x-auth-token'),
            },
            body: JSON.stringify({
                description,
                user: context.user
            })
        }).then(() => {
            setUpdatedOrigami([...updatedOrigami, 1]);
            setDescription("");
        });
    };

    return (
        <PageLayout>
            <Heading value="Share your thoughts..."/>
            <TextArea placeholder="Type something..." onChange={handleChange} value={description}/>
            <Button value="Post" onClick={handleClick}/>
            <h2 className={styles.h2}>Last 3 posts on your wall</h2>
            <Origamis updatedOrigami={updatedOrigami} length={3}/>
        </PageLayout>
    )
};

export default ShareThoughtsPage;