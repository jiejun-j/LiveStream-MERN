import React from "react";
import { ChannelCard } from "./ChannelCard";

export const Channels = ({ channels }) => {
    const channelList = channels.channels; // Access the array inside the channels object
    return (
        <div className="channels-container">
            {channelList.map((c) => (
                <ChannelCard
                    key={c.id}
                    title={c.title}
                    avatarUrl={c.avatarUrl}
                    username={c.username}
                    isOnline={c.isOnline}
                    navigateToChannelHandler={() => { }}
                />
            ))}
        </div>
    );
};