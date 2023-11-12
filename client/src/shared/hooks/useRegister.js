import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as registerRequest } from '../../api';


export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const register = async (email, password, username) => {
        setIsLoading(true);

        const response = await registerRequest({
            email,
            password,
            username,
        });
        
        setIsLoading(false);

        if (response.error) {
            return console.log(response.error);
        }

        const { userDetails } = response.data;

        localStorage.setItem("user", userDetails);

        navigate("/");
    };

    return {
        register,
        isLoading,
    };
}