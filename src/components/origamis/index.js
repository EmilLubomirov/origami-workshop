import React, {useCallback, useEffect, useState} from "react";
import Post from "../post";
import styles from "./index.module.css";

const Origamis = ({length, userId}) =>{

    const [posts, setPosts] = useState([]);

    const getAllPosts =  useCallback(async () => {

        const url = userId ? `http://localhost:9999/api/origami?userId=${userId}` :
                             `http://localhost:9999/api/origami`;

        const promise = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                length
            }
        });

        const result = await promise.json();

        const posts = result.map(post => {
                return <Post key={post._id}
                             description={post.description}
                             author={post.author.username}/>
            });

        setPosts(posts);
    },[length, userId]);

    useEffect(() =>{
        getAllPosts();
    }, [getAllPosts]);

    return (
        <main className={styles.main}>
            <div className={styles.posts}>
                {posts}
            </div>
        </main>
    )
};

export default Origamis;