import React, {useCallback, useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import Button from "../../components/button";
import Origamis from "../../components/origamis";
import Heading from "../../components/heading";
import PageLayout from "../../components/page-layout";
import AuthContext from "../../AuthContext";

const ProfilePage = () =>{

    const [origamisCount, setOrigamisCount] = useState(0);

    const context = useContext(AuthContext);
    const history = useHistory();
    const params = useParams();

    const handleLogout = () =>{
        context.logout();
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        history.push('/login');
    };

    const getOrigamisCount = useCallback(async () =>{

        const userId = params.id;
        const url = `http://localhost:9999/api/origami?userId=${userId}`;

        const promise = await fetch(url);
        const result = await promise.json();

        setOrigamisCount(result.length);
    }, [params.id]);

    useEffect(() =>{
       getOrigamisCount();
    },[getOrigamisCount]);

    const userId = params.id;
    const username = context.user ? context.user.username : "";

    return (
        <PageLayout>
            <Button onClick={handleLogout} value="Logout"/>
            <div>Username: {username}</div>
            <div>Posts: {origamisCount}</div>
            <Heading value="Your 3 recent posts"/>
            <Origamis userId={userId} length={3}/>
        </PageLayout>
    )
};

export default ProfilePage;