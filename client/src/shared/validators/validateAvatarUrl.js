export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

export const avatarUrlValidationMessage =
    "Avatar URL should be a valid URL";