import { useState } from "react";
import { logout as logoutHandler } from "../utils";

const getUserDetails = () => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        try {
            return JSON.parse(userDetails);
        } catch (error) {
            console.error('Error parsing user details:', error);
            // When parsing fails, you can choose to clear the invalid local storage item
            localStorage.removeItem('user');
        }
    }
    return null;
}


export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(getUserDetails());

    const logout = () => {
        logoutHandler();
    };

    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : 'Guest',
        logout,
    };
};