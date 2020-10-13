import React, {useCallback, useEffect, useState} from "react";
import Post from "../post";
import styles from "./index.module.css";
import getOrigamis from "../../utils/origami";

const Origamis = ({length, userId, updatedOrigami}) =>{

    const [posts, setPosts] = useState([]);

    const getAllPosts =  useCallback(async () => {

        const origamis = await getOrigamis(userId, length);

        const posts = origamis.map(post => {
                return <Post key={post._id}
                             description={post.description}
                             author={post.author.username}/>
            });

        setPosts(posts);
    },[length, userId]);

    useEffect(() =>{
        getAllPosts();
    }, [getAllPosts, updatedOrigami]);

    return (
        <main className={styles.main}>
            <div className={styles.posts}>
                {posts}
            </div>
        </main>
    )
};

export default Origamis;