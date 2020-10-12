import React from "react";
import styles from "./index.module.css";

const TextArea = ({ value, placeholder, onChange }) =>{

    return (
        <div>
            <textarea className={styles.textarea} placeholder={placeholder} onChange={onChange}>{value}</textarea>
        </div>
    )

};

export default TextArea;