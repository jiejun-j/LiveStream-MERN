import io from "socket.io-client";

let socket;

export const connectWithSocketServer = () => {
    socket = io("http://localhost:5002");

    socket.on("connection", () => {
        console.log("Succeccfully connected to socket server");
        console.log(socket.id);
    }); 
}