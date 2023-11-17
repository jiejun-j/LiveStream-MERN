import React from "react";

const followedChannels = [
    {
        id: 1,
        username: "user1",
        isOnline: true
    },
    {
        id: 2,
        username: "user2",
        isOnline: false
    },
    {
        id: 3,
        username: "user3",
        isOnline: true
    },
];

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <span className="sidebar-title">For you</span>
            <span className="sidebar-subtitle">FOLLOWED CHANNRLS</span>
            {followedChannels.map((channel) => {
                return (
                    <div key={channel.id} className="sidebar-list-item">
                        <span className="sidebar-list-username">{channel.username}</span>
                        <span 
                            className="sidebar-list-status"
                            style={{ 
                                color: channel.isOnline ? "green" : "red" }}
                        >{channel.isOnline ? "Online" : "Offline"}</span>
                    </div>
                );
            })}
        </div >
    );
};