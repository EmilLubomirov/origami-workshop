import React from "react";
import Button from "../../components/button";
import AuthContext from "../../AuthContext";
import Origamis from "../../components/origamis";
import Heading from "../../components/heading";
import PageLayout from "../../components/page-layout";

class ProfilePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            origamiesCount: 0
        }
    }

    handleLogout = () =>{
        this.context.logout();
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        this.props.history.push('/login');
    };

    getOrigamiesCount = async () =>{

        const userId = this.props.match.params.id;
        const url = `http://localhost:9999/api/origami?userId=${userId}`;

        const promise = await fetch(url);
        const result = await promise.json();

        this.setState({
            origamiesCount: result.length
        });
    };

    componentDidMount() {
       this.getOrigamiesCount();
    }

    render() {

        const userId = this.props.match.params.id;
        const username = this.context.user ? this.context.user.username : "";

        return (
           <PageLayout>
               <Button onClick={this.handleLogout} value="Logout"/>
               <div>Username: {username}</div>
               <div>Posts: {this.state.origamiesCount}</div>
               <Heading value="Your 3 recent posts"/>
               <Origamis userId={userId} length={3}/>
           </PageLayout>
       )
    }
}

ProfilePage.contextType = AuthContext;
export default ProfilePage;