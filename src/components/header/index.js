import React from "react";
import Link from "../link";
import styles from "./index.module.css";
import Logo from "../../images/white-origami-bird.png";

const Header = () => {

    return (
        <header className={styles.navigation}>
            <img src={Logo} className={styles.logo} alt="bird-logo"/>
                <Link href="#" value="Going to 1" location="header"/>
                <Link href="#" value="Going to 2" location="header"/>
                <Link href="#" value="Going to 3" location="header"/>
                <Link href="#" value="Going to 4" location="header"/>
                <Link href="#" value="Going to 5" location="header"/>
                <Link href="#" value="Going to 6" location="header"/>
                <Link href="#" value="Going to 7" location="header"/>
                <Link href="#" value="Going to 8" location="header"/>
        </header>
    )
};

export default Header;
