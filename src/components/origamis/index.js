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

        const promise = await fetch(`http://localhost:9999/api/origami?length=${this.props.length}`);
        const result = await promise.json();

        const length = this.props.length ? parseInt(this.props.length) :
                                            result.length;

        const postsLength = result.length;
        
        const posts = result.slice(postsLength - length)
                            .map((post, index) => {
            return <Post key={post._id}
                         index={postsLength - length + index }
                         description={post.description}
                         author={post.author.username}/>
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
                <div className={styles.posts}>
                    {this.state.posts}
                </div>
            </main>
        )

    }
}

export default Origamis;