import React from "react";
import LinkComponent from "../link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";
import AuthContext from "../../AuthContext";

class Aside extends React.Component {

    render() {

        const {
            user,
            isLoggedIn
        } = this.context;

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
    }
}

Aside.contextType = AuthContext;

export default Aside;