import { changePassword as changePasswordRequset } from "../../api";
import toast from "react-hot-toast";

export const useChangePassword = () => {
    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequset({
            password,
            newPassword,
        });

        if (responseData.error) {
            return toast.error(
                responseData.exception?.response?.data ||
                "Error occured while changing password"
            );
        }

        toast.success("Password changed successfully");
    };

    return{
        changePassword,
    };
};