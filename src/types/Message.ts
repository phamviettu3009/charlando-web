import Attachment from "./Attachment";
import MessageReaction from "./MessageReaction";
import Reply from "./Reply";
import User from "./User";

export default interface Message {
    id: string;
    type: number;
    message: string | null;
    subMessage: string | null;
    iconMessage: string | null;
    messageOnRightSide: boolean;
    consecutiveMessages: boolean;
    timeOfMessageSentDisplay: string;
    edited: boolean;
    makerDate: string;
    recordStatus: string | null;
    channelID: string;
    reply: Reply | null;
    attachments: Attachment[] | null;
    messageReactions: MessageReaction[] | null;
    user: User | null;
    sync: boolean;
    syncID: string | null;
    unsent: boolean;
    urlsPreview: string[] | null;
}
