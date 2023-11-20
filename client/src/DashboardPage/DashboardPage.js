import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { useChannels, useUserDetails } from "../shared/hooks";
import "./dashboardPage.css";

export const DashboardPage = () => {
    const { getChannels } = useChannels();
    const { isLogged } = useUserDetails();

    useEffect(() => {
        getChannels(isLogged);
    }, []);

    return <div className="dashboard-container">
        <Nav />
        <Sidebar />
        <Content />
    </div>;
};