import { AuthItem } from "./authItem";

export default abstract class Login<T extends AuthItem> {
    abstract login(value: T): unknown;
    abstract loggedIn(): boolean;
    abstract logout(value?: unknown): void;
}
