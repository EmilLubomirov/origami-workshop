import React from "react";
import styles from "./index.module.css";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";

const Footer = () =>{

    const navigation = getNavigation();

    return (
        <footer className={styles.footer}>
            <div>
                {
                    navigation.map((navItem, index) => {
                        return <LinkComponent key={index} path={navItem.path} title={navItem.title} location="footer"/>
                    })
                }
            </div>
            <p className={styles.copyright}>Software University 2020 &copy;</p>
        </footer>
    )
};

export default Footer;