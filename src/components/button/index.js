import React from "react";
import styles from "./index.module.css";

const Button = ({value}) =>{

    return (
        <div>
            <button className={styles.button}>{value}</button>
        </div>
    )
};

export default Button;