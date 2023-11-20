import { useEffect, useState } from "react";
import { getFollowedChannels, getChannels as getChannelsRequest } from "../../api";
import toast from "react-hot-toast";

export const useChannels = () => {
    const [channels, setChannels] = useState(null);

    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest();

        if (channelsData.error) {
            return toast.error(
                channelsData.exception?.response?.data ||
                "Error occured while fetching channels"
            );
        }

        if (!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            });
        }

        const followedChannelsData = await getFollowedChannels();

        if (followedChannelsData.error) {
            return toast.error(
                followedChannelsData.exception?.response?.data ||
                "Error occured while fetching followed channels"
            );
        }

        setChannels({
            channels: channelsData.data.channels,
            followedChannels: channelsData.data.channels.filter(channel => 
                followedChannelsData.data.followedChannels.includes(channel.id)),
        });
    };

    return {
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels,
        followedChannels: channels?.followedChannels,
    };
};
