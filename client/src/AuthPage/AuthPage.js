import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div>
            {isLogin ? (
                <Login switchAuthHandler={handleAuthPageToggle} />
            ) : (
                <Register switchAuthHandler={handleAuthPageToggle} />
            )}
        </div>
    );
};