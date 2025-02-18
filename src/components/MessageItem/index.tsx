import Message from "types/Message";
import IF from "../IF";
import Avatar from "./Avatar";
import DateTimeContent from "./DateTimeContent";
import "./message-item.scss";
import RenderMessage from "./RenderMessage";

type MessageItemPropsType = {
    message: Message;
};

function MessageItem({ message }: MessageItemPropsType): JSX.Element {
    const messageSide: string = message.messageOnRightSide
        ? "right-side"
        : "left-side";
    return (
        <Avatar
            hide={message.messageOnRightSide || message.consecutiveMessages}
            user={message.user}
        >
            <div className={`message-item message-item--${messageSide}`}>
                <DateTimeContent
                    timeOfMessageSentDisplay={message.timeOfMessageSentDisplay}
                    consecutiveMessages={message.consecutiveMessages}
                />

                <IF condition={message.edited}>
                    <span className="message-item__edited">Edited</span>
                </IF>

                <RenderMessage message={message} />
            </div>
        </Avatar>
    );
}

export default MessageItem;
