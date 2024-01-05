import { getChatHistory } from "../../socketConn";
import { useEffect } from "react";

export const useChatHistory = ( channelId ) => {
    useEffect(() => {
        getChatHistory(channelId);
    }, []);

    return {
        messages:[],
        sendMessage: () => {},
    };
}