import { AxiosError } from "axios";
import ApiError from "types/ApiError";

export interface ErrorHandlerType {
    errorMessage: string;
    errorCode?: string;
}

const ErrorHandler = (error: AxiosError): ErrorHandlerType => {
    const apiError: ApiError | undefined = error.response?.data as ApiError;
    const errorMessage: string = apiError.message ?? error.message;
    const errorCode: string | undefined = error.code;
    return { errorMessage, errorCode } as ErrorHandlerType;
};

export default ErrorHandler;
