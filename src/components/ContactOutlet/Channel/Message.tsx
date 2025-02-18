import { Fragment } from "react/jsx-runtime";

import AttachmentIcon from "@mui/icons-material/Attachment";
import ShortenMessage from "types/ShortenMessage";
import { MessageType } from "constants/message";

type MessagePropsType = {
    message: ShortenMessage;
    read: boolean;
};

function Message({ message, read }: MessagePropsType): JSX.Element {
    const RenderMessage: { [key: number]: JSX.Element } = {
        [MessageType.MESSAGE]: <Fragment>{message.message}</Fragment>,
        [MessageType.ATTACHMENTS]: (
            <div className="d-flex gap-1">
                <AttachmentIcon className={`channel__message--${read ? "read" : "unread"}`} />
                <span className={`channel__message--${read ? "read" : "unread"}`}>Tệp đính kèm</span>
            </div>
        ),
        [MessageType.ICON_MESSAGE]: <Fragment>{message.iconMessage}</Fragment>,
    };

    return RenderMessage[message.type];
}

export default Message;
