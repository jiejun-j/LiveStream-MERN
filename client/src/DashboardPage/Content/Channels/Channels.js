import React from "react";
import { useNavigate } from "react-router-dom";
import { ChannelCard } from "./ChannelCard";

export const Channels = ({ channels }) => {

    const navigate = useNavigate();

    const handleNavigateToChannel = (id) => {
        navigate(`/channel/${id}`);
    };

    const channelList = channels.channels; // Access the array inside the channels object
    return (
        <div className="channels-container">
            {channelList.map((c) => (
                <ChannelCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    avatarUrl={c.avatarUrl}
                    username={c.username}
                    isOnline={c.isOnline}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </div>
    );
};