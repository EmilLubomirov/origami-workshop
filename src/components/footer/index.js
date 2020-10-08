import React from "react";
import styles from "./index.module.css";
import LinkComponent from "../link";
import getNavigation from "../../utils/navigation";
import AuthContext from "../../AuthContext";

class Footer extends React.Component{

   render() {

       const {
           user,
           isLoggedIn
       } = this.context;

       const userId = user ? user.id : null;
       const navigation = getNavigation(isLoggedIn, userId);

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
   }
}

Footer.contextType = AuthContext;
export default Footer;