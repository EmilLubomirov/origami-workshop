import React from "react";
import Link from "../link";
import styles from "./index.module.css";

const Aside = () => {

    return (
        <aside className={styles.aside}>
            <Link href="#" value="Going to 1" location="aside"/>
            <Link href="#" value="Going to 2" location="aside"/>
            <Link href="#" value="Going to 3" location="aside"/>
            <Link href="#" value="Going to 4" location="aside"/>
            <Link href="#" value="Going to 5" location="aside"/>
            <Link href="#" value="Going to 6" location="aside"/>
            <Link href="#" value="Going to 7" location="aside"/>
            <Link href="#" value="Going to 8" location="aside"/>
        </aside>
    )
};

export default Aside;