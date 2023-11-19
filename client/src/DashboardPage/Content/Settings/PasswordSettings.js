import React, {useState} from "react";
import { passwordValidationMessage, validatePassword } from "../../../shared/validators";
import { Input } from "../../../shared/components";
import { useChangePassword } from "../../../shared/hooks";

const inputs = [
    {
        field: "password",
        label: "Current Password",
        validatoinMessage: passwordValidationMessage,
        type: "password",
    },
    {
        field: "newPassword",
        label: "New Password",
        validatoinMessage: passwordValidationMessage,
        type: "password",
    },
]

export const PasswordSettings = () => {
    const [formState, setFormState] = useState({
        password: {
            isValid: false,
            showError: false,
            value: "",
        },
        newPassword: {
            isValid: false,
            showError: false,
            value: "",
        },
    })

    const {changePassword} = useChangePassword();

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
        let isValid = validatePassword(value);

            setFormState((prevState) => ({
                ...prevState,
                [field]: {
                    ...prevState[field],
                    isValid,
                    showError: !isValid,
                },
            }));
        };

    const isSubmitButtonDisabled = 
        !formState.password.isValid ||
        !formState.newPassword.isValid;
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        changePassword(formState.password.value, formState.newPassword.value);
    } 

    return (
        <form className="settings-form">
            {inputs.map(input => (
                <Input
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    value={formState[input.field].value}
                    onBlurHandler={handleInputValidationOnBlur}
                    onChangeHandler={handleInputValueChange}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validatoinMessage}
                    type={input.type}
                />
            ))}
            <button
                disabled={isSubmitButtonDisabled}
                onClick={handleFormSubmit}
            >Save Changes</button>
        </form>
    );
};