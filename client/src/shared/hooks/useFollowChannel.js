import { toast } from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../api";

export const useFollowChannel = () => {
    const followChannel = async (channelId) => {
        const responseData = await followChannelRequest(channelId);

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data ||
                "Error occured while following channel"
            );
        }

        toast.success("Channel followed successfully");
    };

    return {
        followChannel,
    };
};