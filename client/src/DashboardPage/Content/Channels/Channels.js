import React from "react";
import { ChannelCard } from "./ChannelCard";

export const dummyChannels = [
    {
        id: 1,
        title: "general",
        avatarUrl: "https://picsum.photos/200",
        username: "user1",
        isOnline: true,
    },
    {
        id: 2,
        title: "general",
        avatarUrl: "https://picsum.photos/200",
        username: "user2",
        isOnline: false,
    },
    {
        id: 3,
        title: "general",
        avatarUrl: "https://picsum.photos/200",
        username: "user3",
        isOnline: true,
    },
];

export const Channels = () => {
    return <div className="channels-container">
        {dummyChannels.map(c => (
            <ChannelCard
                key={c.id}
                title={c.title}
                avatarUrl={c.avatarUrl}
                username={c.username}
                isOnline={c.isOnline}
                navigateToChannelHandler={() => {}}
            />
        ))}
    </div>;
};