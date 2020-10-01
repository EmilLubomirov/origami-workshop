import React from "react";
import PageLayout from "../../components/page-layout";
import Origamis from "../../components/origamis";
import Heading from "../../components/heading";


const PublicationsPage = () => {

    return (
        <PageLayout>
            <Heading value="Publications"/>
            <Origamis/>
        </PageLayout>
    )
};

export default PublicationsPage;