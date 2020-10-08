import React from "react";
import Button from "../../components/button";
import AuthContext from "../../AuthContext";
import Origamis from "../../components/origamis";
import Heading from "../../components/heading";
import PageLayout from "../../components/page-layout";

class ProfilePage extends React.Component{

    handleLogout = () =>{
        this.context.logout();
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        this.props.history.push('/login');
    };

    render() {

       return (
           <PageLayout>
               <Button onClick={this.handleLogout} value="Logout"/>
               <Heading value="Your 3 recent posts"/>
               <Origamis length={3}/>
           </PageLayout>
       )
    }
}

ProfilePage.contextType = AuthContext;
export default ProfilePage;