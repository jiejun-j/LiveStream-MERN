import React from "react";

const messages = [
    {
        author: "John",
        content: "Hello!",
        id: 1,
    },
    {
        author: "John",
        content: "Hello!",
        id: 2,
    },
    {
        author: "John",
        content: "Hello!",
        id: 3,
    },
];

const Message = ({ author, content }) => {
    return(
    <span className="chat-messages-message">
        <span style = {{fontWeight:'bold'}}>{author}: </span>
        {content}
    </span>
    )
}

export const Messages = () => {
    return <div className="chat-messages-container">
        {messages.map((message) => (
            <Message
                key={message.id}
                author={message.author}
                content={message.content}
            />
        ))}
    </div>;
};