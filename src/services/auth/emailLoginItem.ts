import Login from "core/auth/login";
import { AxiosError } from "axios";
import { AccountLogin } from "types/AccountLogin";
import Token from "types/Token";
import ApiError from "types/ApiError";
import Cookies from "js-cookie";
import { AxiosInstanceExpand } from "services/axios";
import { AuthItem } from "core/auth/authItem";

class EmailLoginItem extends Login<AuthItem> {
    axiosInstance: AxiosInstanceExpand;

    constructor(axiosInstance: AxiosInstanceExpand) {
        super();
        this.axiosInstance = axiosInstance;
    }

    login(value: AccountLogin): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.fetchToken(value)
                .then((token: Token) => {
                    if (token.accessToken && token.refreshToken) {
                        this.saveToken(token);
                        resolve(true);
                    } else {
                        reject("Invalid token");
                    }
                })
                .catch((error: AxiosError) => {
                    const apiError: ApiError = error.response?.data as ApiError;
                    reject(apiError.message);
                });
        });
    }

    loggedIn(): boolean {
        const accessToken: string | undefined = Cookies.get("accessToken");

        if (accessToken) {
            this.axiosInstance.setAuthorization(accessToken);
            return true;
        } else {
            return false;
        }
    }

    logout(): void {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        this.axiosInstance.removeAuthorization();
    }

    private async fetchToken(payload: AccountLogin): Promise<Token> {
        return await this.axiosInstance.post("/auth/login-with-email", payload);
    }

    private saveToken(token: Token): void {
        Cookies.set("accessToken", token.accessToken, {
            expires: 1,
            secure: true,
            sameSite: "Strict",
        });

        Cookies.set("refreshToken", token.refreshToken, {
            expires: 30,
            secure: true,
            sameSite: "Strict",
        });

        this.axiosInstance.setAuthorization(token.accessToken);
    }
}

export default EmailLoginItem;
