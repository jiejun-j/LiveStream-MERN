import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";

const channelSettings = {
    title: "Dummy Channel",
    description: "This is a dummy channel",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    username: "dummyuser",
    streamKey: "1234567890",
}

export const Settings = () => {
    return <div className="settings-container">
        <span>Settings</span>
        <ChannelSettings settings={channelSettings}/>
        <StreamKey streamKey = {channelSettings.streamKey}/>
    </div>
};