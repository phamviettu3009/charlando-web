import axios, { AxiosError, AxiosInstance } from "axios";
import { BASE_URL } from "constants/common";

export interface AxiosInstanceExpand extends AxiosInstance {
    setAuthorization: (token: string) => void;
    removeAuthorization: () => void;
}

function createAxiosInstance(): AxiosInstanceExpand {
    const instance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
    });

    let _authorizationToken: string | undefined;

    instance.interceptors.request.use((config) => {
        if (_authorizationToken) {
            config.headers["Authorization"] = _authorizationToken;
        }
        return config;
    });

    instance.interceptors.response.use(
        (response) => response.data,
        (error: AxiosError) => Promise.reject(error),
    );

    function setAuthorization(token: string) {
        _authorizationToken = `Bearer ${token}`;
    }

    function removeAuthorization() {
        _authorizationToken = undefined;
    }

    return {
        ...instance,
        setAuthorization,
        removeAuthorization,
    } as AxiosInstanceExpand;
}

const axiosInstance: AxiosInstanceExpand = createAxiosInstance();
export default axiosInstance;
