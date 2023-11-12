export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/;
    return regex.test(password);
};

export const passwordValidationMessage = 
    "Password should have 6 to 12 characters without spaces";