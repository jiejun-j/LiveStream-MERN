export const validateUsername = (username) => {
    // username should have 3 to 8 characters without spaces
    const regex = /^\S{3,8}$/;
    return regex.test(username);
};

export const usernameValidationMessage =
    "Username should have 3 to 8 characters without spaces";