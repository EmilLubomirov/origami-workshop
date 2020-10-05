import React from "react";
import styles from "./index.module.css";

const Input = ({ id, label, type, value, onChange, name }) =>{

    return (
        <div className={styles["container"]}>
            <label htmlFor={id}>
                {label}:
                <input className={styles.input} value={value} type={type || "text"} id={id} name={name} onChange={onChange}/>
            </label>
        </div>
    )
};

export default Input;