import React, {useContext} from "react";
import LinkComponent from "../link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";
import AuthContext from "../../AuthContext";

const Aside = () =>{

    const context = useContext(AuthContext);

    const {
        user,
        isLoggedIn
    } = context;

    const userId = user ? user.id : null;
    const navigation = getNavigation(isLoggedIn, userId);

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