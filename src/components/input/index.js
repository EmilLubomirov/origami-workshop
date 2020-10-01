import React from "react";
import styles from "./index.module.css";

const Input = ({id, label, type}) =>{

    return (
        <div className={styles["container"]}>
            <label htmlFor={id}>
                {label}:
                <input className={styles.input} type={type} id={id}/>
            </label>
        </div>
    )
};

export default Input;