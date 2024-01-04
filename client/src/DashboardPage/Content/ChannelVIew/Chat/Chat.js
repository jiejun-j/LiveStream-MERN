import React from "react";
import { Messages } from "./Messages";
import { NewMessageInput } from "./NewMessageInput";

export const Chat = ({ channelId }) => {
    return (
        <div className="chat-section">
            <div className="chat-title-container">
                <span className="chat-title-text">Stream Chat</span>
            </div>
            <Messages messages={[]} />
            <NewMessageInput sendMessage={() => {}} />
        </div>
    );
};    