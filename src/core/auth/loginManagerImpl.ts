import { AuthItem } from "./authItem";
import Login from "./login";
import LoginManager from "./loginManager";

class LoginManagerImpl implements LoginManager {
    private _loginHashMap: Map<string, Login<AuthItem>> = new Map();

    register(auth: Login<AuthItem>): void {
        this._loginHashMap.set(auth.constructor.name, auth);
    }

    unregister(auth: Login<AuthItem>): void {
        this._loginHashMap.delete(auth.constructor.name);
    }

    login<T>(value: AuthItem, auth: T & { name: string }): unknown {
        const loginInstance: Login<AuthItem> | undefined = this._loginHashMap.get(auth.name);
        if (loginInstance) {
            return loginInstance.login(value);
        } else {
            throw Error("Instance not found!");
        }
    }

    loggedIn(): boolean {
        const logins: Login<AuthItem>[] = Array.from(this._loginHashMap.values());
        return logins.some((instance) => instance.loggedIn());
    }

    logout(value: unknown): void {
        this._loginHashMap.forEach((instance) => instance.logout(value));
    }
}

export function createLoginManagerInstance() {
    return new LoginManagerImpl();
}

export default LoginManagerImpl;
