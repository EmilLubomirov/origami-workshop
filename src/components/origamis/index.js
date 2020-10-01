import React from "react";
import Post from "../post";
import styles from "./index.module.css";

class Origamis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

   async getAllPosts() {

        const promise = await fetch('http://localhost:9999/api/origami');
        const result = await promise.json();

        const posts = result.map(post => {
            return <Post key={post._id} description={post.description} author={post.author.username}/>
        });

       this.setState({
            posts
        })
    }

    componentDidMount() {
        this.getAllPosts();
    }

    render() {

        return (
            <main className={styles.main}>
                <h1 className={styles.heading}>Soooome heading</h1>
                <div className={styles.posts}>
                    {this.state.posts}
                </div>
            </main>
        )

    }
}

export default Origamis;