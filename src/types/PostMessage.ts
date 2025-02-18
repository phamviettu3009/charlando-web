import MessageLocation from "./MessageLocation";

export default interface PostMessage {
    message: string;
    messageLocation: MessageLocation;
    deviceLocalTime: string;
    iconMessage: string;
    replyID: string;
    attachmentIDs: string[];
    messageReaction: string;
    syncID: string;
}
