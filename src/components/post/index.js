import React from "react";
import styles from  "./index.module.css";
import Origami from "../../images/blue-origami-bird.png";

const Post = ({description, author, index}) =>{

    return (
        <div className={styles.post}>
            <img src={Origami} className={styles.origami} alt="Origami"/>
            <p className={styles.description}>
                <span>{index} - </span>
                {description}
            </p>
            <div className={styles["author-wrapper"]}>
                <span className={styles.author}>
                  <small>{author}</small>
                </span>
            </div>
        </div>
    )
};

export default Post;