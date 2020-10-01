import React from "react";
import styles from "./index.module.css";

const Heading = (props) =>{

    return (
        <div>
            <h1 className={styles.heading}>{props.value}</h1>
        </div>
    )
};

export default Heading;