export default interface ShortenMessage {
    type: number;
    recordStatus: string | null;
    message: string | null;
    subMessage: string | null;
    iconMessage: string | null;
    timeOfMessageSentDisplay: string;
    channelID: string;
}
