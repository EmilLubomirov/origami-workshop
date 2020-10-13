import React from "react";
import styles from "./index.module.css";

const TextArea = ({ value, placeholder, onChange }) =>{

    return (
        <div>
            <textarea className={styles.textarea} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )

};

export default TextArea;