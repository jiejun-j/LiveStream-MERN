import React from "react";
import { useUserDetails } from "../../../shared/hooks";

const FollowButton = ({ channelId }) => {
    return (
        <button className="channel-follow-button">
            Follow
        </button>
    );
}

export const ChannelDescription = ({
    username, 
    title, 
    description, 
    channelId
}) => {
    const { isLogged } = useUserDetails();

    return(
        <div className="channel-description-container">
            <span className="channel-description-title">
                {username}
                <span>
                    {isLogged &&
                        <FollowButton
                        className="channel-follow-button"
                        channelId={channelId}
                    />}
                </span>
            </span>
            <span className="channel-description-subtitle">{title}</span>
            <div className="channel-description-box">
                <span className="channel-description">{description}</span>
            </div>
        </div>
    );
};