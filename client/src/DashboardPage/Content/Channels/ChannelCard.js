import React from "react";

const imageUrl = "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a";

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