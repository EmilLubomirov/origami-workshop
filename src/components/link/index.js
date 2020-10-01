import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const LinkComponent = ({location, path, title}) =>{

    return (
        <div className={styles[`${location}-link`]}>
            <Link to={path} className={styles[`${location}-list-item`]}>{title}</Link>
        </div>
    )
};

export default LinkComponent;