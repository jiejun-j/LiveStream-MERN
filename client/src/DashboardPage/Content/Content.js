import React from "react";
import { Route, Routes } from "react-router-dom";
import { Channels } from "./Channels/Channels";
import { ChannelView } from "./ChannelVIew";
import { Settings } from "./Settings";

export const Content = () => {
    return <div className="content-container">
        <Routes>
            <Route path="settings" element={ < Settings />} />
            <Route path="channels" element={ < Channels />} />
            <Route path="channels/:id" element={ < ChannelView />} />
        </Routes>
    </div>;
};