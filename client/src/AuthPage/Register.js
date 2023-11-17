import React, { useState } from "react";
import { Logo } from "./Logo";
import { 
    emailValidationMessage,
    validateEmail,
    validatePassword,
    passwordValidationMessage,
    validateUsername,
    validatePasswordConf,
    usernameValidationMessage,
    passwordConfValidationMessage,
} from "../shared/validators";
import { useRegister } from "../shared/hooks";
import { Input } from "../shared/components";


export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading} = useRegister();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
            },
        password: {
            value: "",
            isValid: false,
            showError: false,
            },
        username: {
            value: "",
            isValid: false,
            showError: false,
            },
        passwordConf: {
            value: "",
            isValid: false,
            showError: false,
            },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;

        switch (field) {
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            case "username":
                isValid = validateUsername(value);
                break;
            case "passwordConf":
                isValid = validatePasswordConf(formState.password.value, value);
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleRegister = (event) => {
        event.preventDefault();
        
        register(
            formState.email.value, 
            formState.password.value,
            formState.username.value
        )
    }

    const isSubmitButtonDisabled =
        isLoading ||
        !formState.email.isValid ||
        !formState.password.isValid ||
        !formState.username.isValid ||
        formState.password.value !== formState.passwordConf.value

    return (
        <div className="register-container">
            <Logo text={"Sign up to Twitch"} />
            <form className="auth-form">
                <Input
                    field={"email"}
                    label={"Email"}
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field={"username"}
                    label={"Username"}
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={usernameValidationMessage}
                />
                <Input
                    field={"password"}
                    label={"Password"}
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <Input
                    field={"passwordConf"}
                    label={"Password Confirmation"}
                    value={formState.passwordConf.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConf.showError}
                    validationMessage={passwordConfValidationMessage}
                />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Already have an account? Sign in
            </span>
        </div>
    );
};