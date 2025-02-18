import { AuthItem } from "core/auth/authItem";

export interface AccountLogin extends AuthItem {
    user: string;
    password: string;
}
