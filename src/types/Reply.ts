import Attachment from "./Attachment";

export default interface Reply {
    id: string;
    type: number;
    message: string | null;
    attachments: Attachment[] | null;
}
