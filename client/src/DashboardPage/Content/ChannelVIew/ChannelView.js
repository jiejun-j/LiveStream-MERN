import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../../shared/hooks";
import { LoadingSpinner } from "../../../shared/components";

export const Stream = () => {
    return <div className="channel-video-container">
        <ReactFlvPlayer
            url="http://localhost:8000/live/9ba028af-dcf3-451e-b73c-46198000d928.flv"
            height="100%"
            width="100%"
        />
    </div>;
};

export const ChannelView = () => {
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();
    
    const { id } = useParams();

    useEffect(() => {
        if (id){
            getChannelDetails(id);
        }
    }, [id]);

    if (isFetching) {
        return <LoadingSpinner />;
    }

    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                {/* <div className="channel-offline-placeholder">
                    <span>Channel is offline</span>
                </div> */}
                <Stream />
                <ChannelDescription
                    channelId={channelDetails.id}
                    title={channelDetails.title}
                    description={channelDetails.description}
                    username={channelDetails.username}
                />
            </div>
            <Chat />
        </div>
    );
};