import React, {useContext} from "react";
import LinkComponent from "../link";
import styles from "./index.module.css";
import Logo from "../../images/white-origami-bird.png";
import getNavigation from "../../utils/navigation";
import AuthContext from "../../AuthContext";

const Header = () =>{

    const context = useContext(AuthContext);

    const {
        user,
        isLoggedIn
    } = context;

    const userId = user ? user.id : null;
    const navigation = getNavigation(isLoggedIn, userId);

    return (
        <header className={styles.navigation}>
            <img src={Logo} className={styles.logo} alt="bird-logo"/>
            {
                navigation.map((navItem, index) => {
                    return <LinkComponent key={index} path={navItem.path} title={navItem.title} location="header"/>
                })
            }
        </header>
    )
};

export default Header;
