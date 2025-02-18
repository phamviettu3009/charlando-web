import { UseMessageType } from "hooks/useMessage";
import Bottom from "./Bottom";
import Content from "./Content";
import Header from "./Header";
import "./message.scss";

type MessagePropsType = {
    messageHook: UseMessageType;
};

function Message({ messageHook }: MessagePropsType): JSX.Element {
    const { messageData, inViewLoadMore, scrollIntoViewRef } = messageHook;

    return (
        <div className="message-container">
            <Header />
            <Content messageData={messageData} inViewLoadMore={inViewLoadMore} scrollIntoViewRef={scrollIntoViewRef} />
            <Bottom />
        </div>
    );
}

export default Message;
