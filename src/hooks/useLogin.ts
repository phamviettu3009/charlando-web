import { useState } from "react";
import { Control, useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import EmailPassword from "types/EmailPassword";
import { AccountLogin } from "types/AccountLogin";
import loginManager from "services/auth/auth";
import EmailLoginItem from "services/auth/emailLoginItem";

interface UseLoginType {
    control: Control<EmailPassword, unknown>;
    showPassword: boolean;
    handleShowPassword: () => void;
    handleLogin: () => void;
    message: string;
    isLogin: boolean;
}

function useLogin(): UseLoginType {
    const [message, setMessage] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    const { control, handleSubmit } = useForm<EmailPassword>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleShowPassword = (): void => {
        setShowPassword((show: boolean) => !show);
    };

    const handleLogin: () => void = handleSubmit((data: EmailPassword): void => {
        setIsLogin(true);
        const accountLogin: AccountLogin = {
            user: data.email,
            password: data.password,
            tenantCode: "MSC",
            deviceID: "4183ea05-33fb-4b25-a0b5-ac05fcc91721",
            deviceName: "Macbook",
            deviceSystemName: "Macbook",
            os: "MacOS",
            description: "",
        };

        const authResult: Promise<boolean> = loginManager.login(accountLogin, EmailLoginItem) as Promise<boolean>;
        authResult
            .then(() => {
                setMessage("");
                navigate("/message");
            })
            .catch((error: string) => {
                setMessage(error);
            })
            .finally(() => {
                setIsLogin(false);
            });
    });

    return {
        control,
        showPassword,
        handleShowPassword,
        handleLogin,
        message,
        isLogin,
    };
}

export default useLogin;
