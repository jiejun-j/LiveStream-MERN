import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";
import { useChannelSettings } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";

const channelSettings = {
    title: "Dummy Channel",
    description: "This is a dummy channel",
    avatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    username: "dummy",
    streamKey: "1234567890",
}

export const Settings = () => {
    const { channelSettings, isFetching } = useChannelSettings();

    if (isFetching || !channelSettings) {
        return <LoadingSpinner />;
    }

    return (
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} />
            <PasswordSettings />
            <StreamKey streamKey={channelSettings.streamKey} />
        </div>
    )
};