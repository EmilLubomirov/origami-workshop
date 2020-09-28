import React from "react";
import styles from "./index.module.css";

const Link = ({location, href, value}) =>{

    return (
        <div className={styles[`${location}-link`]}>
            <a href={href} className={styles[`${location}-list-item`]}>{value}</a>
        </div>
    )
};

export default Link;