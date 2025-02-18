import User from "./User";

export type UserUpdateRequest = Omit<User, "id" | "online" | "setting">;
