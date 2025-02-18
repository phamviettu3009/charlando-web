import User from "./User";

export default interface UserExpand extends Omit<User, "setting"> {
    relationshipStatus?: string | null;
    friend: number;
    channelID?: string | null;
}
