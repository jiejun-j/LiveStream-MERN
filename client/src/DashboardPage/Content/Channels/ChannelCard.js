import React from "react";

const imageUrl = "https://www.w3schools.com/howto/img_avatar.png";

const ChannelAvatar = ({ url }) => {
    return (
        <div className="channel-avatar-container">
            <img src={ url || imageUrl } width="100%" height="100%" />
        </div>
    );
};

export const ChannelCard = ({
    title,
    id,
    username,
    avatarUrl,
    isOnline,
    navigateToChannelHandler,
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id);
    };

    return (
        <div className="channels-card" onClick ={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channel-card-title">{title}</span>
            <span className="channel-card-text">{username}</span>
            <span 
                className="channel-card-text" 
                style={{ color: isOnline ? "green" : "red" }}
                >
                {isOnline ? "Online" : "Offline"}
            </span>
        </div>
    );
}