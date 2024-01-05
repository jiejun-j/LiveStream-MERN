import { useEffect } from "react";
import { getChatHistory, sendChatMessage, closeChatSubscription } from "../../socketConn";
import { useUserDetails } from "./useUserDetails";

export const useChatHistory = ( channelId ) => {

    const { isLogged, username } = useUserDetails();

    useEffect(() => {
        getChatHistory(channelId);

        return () => {
            closeChatSubscription(channelId);
        };
    }, []);

    const sendMessage = (message) => {
        sendChatMessage(channelId, {
            author: isLogged ? username : 'Guest',
            content: message,
        });
    };

    return {
        messages:[],
        sendMessage,
    };
}