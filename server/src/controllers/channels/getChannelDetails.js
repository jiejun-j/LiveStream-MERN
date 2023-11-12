export const getChannelDetails = async (req, res) => {
    return res.status(200).json({
        id:1,
        title:'channel',
        description:'channel description',
        username:'jennie',
        isOnline:false,
        streamUrl:'http',
    });
}