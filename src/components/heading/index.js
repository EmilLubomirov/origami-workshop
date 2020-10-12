import React from "react";
import styles from "./index.module.css";

const Heading = ({value}) =>{

    return (
        <div>
            <h1 className={styles.heading}>{value}</h1>
        </div>
    )
};

export default Heading;