import React from "react";
import styles from "./index.module.css";
import Link from "../link";

const Footer = () =>{

    return (
        <footer className={styles.footer}>
            <div>
                <Link href="#" value="Going to 1" location="footer"/>
                <Link href="#" value="Going to 2" location="footer"/>
                <Link href="#" value="Going to 3" location="footer"/>
                <Link href="#" value="Going to 4" location="footer"/>
                <Link href="#" value="Going to 5" location="footer"/>
                <Link href="#" value="Going to 6" location="footer"/>
                <Link href="#" value="Going to 7" location="footer"/>
                <Link href="#" value="Going to 8" location="footer"/>
            </div>
            <p className={styles.copyright}>Software University 2020 &copy;</p>
        </footer>
    )
};

export default Footer;