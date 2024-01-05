import { Server } from "socket.io";
import { emitChatHistory, emitChatMessage } from "./events/chatHistory.js";

let io;

export const registerSocketServer = (server) => {
    io = new Server(server,{
        cors:{
            origin:"*",
            methods:["GET","POST"]
        },
    });

    io.on("connection", (socket) => {

        socket.on('chat-history', (channelId) => {
            socket.join(channelId);
            emitChatHistory(socket, channelId);
        });

        socket.on('chat-message', (data) =>{
            emitChatMessage(io, { toChannel: data.toChannel, message: data.message })
        });

        socket.on('chat-unsubscribe', (channelId) => {
            socket.leave(channelId);
        });
    });
};