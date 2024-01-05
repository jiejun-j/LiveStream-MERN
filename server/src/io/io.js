import { Server } from "socket.io";
import { emitChatHistory } from "./events/chatHistory.js";

let io;

export const registerSocketServer = (server) => {
    io = new Server(server,{
        cors:{
            origin:"*",
            methods:["GET","POST"]
        },
    });

    io.on("connection", (socket) => {
        console.log("new user connected");
        console.log(socket.id);

        socket.on('chat-history', (channelId) => {
            emitChatHistory(socket, channelId);
        });
    });
};