import MessageLocation from "./MessageLocation";

export default interface PutMessage {
    message: string;
    messageLocation: MessageLocation;
    deviceLocalTime: string;
}
