import io from "socket.io-client";
import { useStore } from "../store";

let socket;

export const connectWithSocketServer = () => {
    socket = io("http://localhost:5002");

    socket.on("connection", () => {
        console.log("Succeccfully connected to socket server");
        console.log(socket.id);
    }); 

    socket.on("chat-history", (chatHistory) => {
        const { setChatHistory } = useStore.getState();

        setChatHistory(chatHistory);
    });

    socket.on("chat-message", (chatMessage) => {
        const { chatHistory, setChatHistory } = useStore.getState();

        console.log("Before updating the chat history:", chatMessage);

        setChatHistory({
            channelId: chatMessage.channelId,
            messages:[
                ...chatHistory.messages,
                {
                    author: chatMessage.author,
                    content: chatMessage.content,
                    date: chatMessage.date,
                }
            ],
        });

        console.log("After updating chat history:", useStore.getState().chatHistory);
    });
};

export const getChatHistory = (channelId) => {
    socket.emit("chat-history", channelId);
};

export const sendChatMessage = (toChannel, message) => {
    socket.emit('chat-message',{
        toChannel,
        message,
    });
};

export const closeChatSubscription = (channelId) => {
    socket.emit('chat-unsubscribe', channelId);
};