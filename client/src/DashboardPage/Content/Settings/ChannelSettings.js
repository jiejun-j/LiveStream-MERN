import React, {useState} from "react";
import { 
    usernameValidationMessage,
    titleValidationMessage,
    avatarUrlValidationMessage,
    descriptionValidationMessage,
    validateUsername,
    validateAvatarUrl,
    validateTitle,
    validateDescription
} from "../../../shared/validators";
import { Input } from "../../../shared/components";

const inputs = [
    {
        field: "username",
        label: "Username",
        validatoinMessage: usernameValidationMessage,
        type: "text",
    },
    {
        field: "title",
        label: "Title",
        validatoinMessage: titleValidationMessage,
        type: "text",
    },
    {
        field: "avatarUrl",
        label: "Avatar Url",
        validatoinMessage: avatarUrlValidationMessage,
        type: "text",
    },
    {
        field: "description",
        label: "Description",
        validatoinMessage: descriptionValidationMessage,
        type: "text",
        textarea: true,
    },
]

export const ChannelSettings = ({settings, saveSettings}) => {
    const [formState, setFormState] = useState({
        title: {
            isValid: false,
            showError: false,
            value: settings.title,
        },
        username: {
            isValid: false,
            showError: false,
            value: settings.username,
        },
        avatarUrl: {
            isValid: false,
            showError: false,
            value: settings.avatarUrl,
        },
        description: {
            isValid: false,
            showError: false,
            value: settings.description,
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
            case "username":
                isValid = validateUsername(value);
                break;
            case "avatarUrl":
                isValid = validateAvatarUrl(value);
                break;
            case "title":
                isValid = validateTitle(value);
                break;
            case "description":
                isValid = validateDescription(value);
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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            avatarUrl: formState.avatarUrl.value,
            description: formState.description.value,
        });
    };

    const isSubmitButtonDisabled = 
        !formState.title.isValid ||
        !formState.username.isValid ||
        !formState.avatarUrl.isValid ||
        !formState.description.isValid;

    return (
        <form className="settings-form">
            {inputs.map((input) => (
                <Input
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    value={formState[input.field].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validatoinMessage}
                    type={input.type}
                    textarea={input.textarea}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
                Save Changes
            </button>
        </form>
    );
};