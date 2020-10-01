import React from "react";
import LinkComponent from "../link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";

const Aside = () => {

    const navigation = getNavigation();

    return (
        <aside className={styles.aside}>
            {
                navigation.map((navItem, index) => {
                    return <LinkComponent key={index} path={navItem.path} title={navItem.title} location="aside"/>
                })
            }
        </aside>
    )
};

export default Aside;