import React from "react";
import styles from "./index.module.css";

const Button = ({ type, value, onClick}) =>{

    return (
        <div>
            <button className={styles.button} type={type || "button"} onClick={onClick}>{value}</button>
        </div>
    )
};

export default Button;