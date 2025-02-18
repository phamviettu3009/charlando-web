import { AuthItem } from "./authItem";
import Login from "./login";

interface LoginManager {
    register(auth: Login<AuthItem>): void;
    unregister(auth: Login<AuthItem>): void;
    login<T>(value: AuthItem, auth: T): unknown;
    loggedIn(): boolean;
    logout(value?: unknown): void;
}

export default LoginManager;
