import Message from "types/Message";
import IF from "../IF";

type MessageBubblePropsType = {
    message: Message | null;
};

function MessageBubble({ message }: MessageBubblePropsType): JSX.Element {
    return (
        <IF condition={message?.message}>
            <p className="message-item__bubble">{message?.message}</p>
        </IF>
    );
}

export default MessageBubble;
