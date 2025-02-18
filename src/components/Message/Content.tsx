import Message from "types/Message";
import MessageItem from "components/MessageItem";
import { InfiniteData } from "@tanstack/react-query";
import Page from "types/Page";
import { InViewHookResponse } from "react-intersection-observer";
import { RefObject } from "react";

type ContentPropsType = {
    messageData: InfiniteData<Page<Message>, unknown> | undefined;
    inViewLoadMore: InViewHookResponse;
    scrollIntoViewRef: RefObject<HTMLDivElement>;
};

function Content({ messageData, inViewLoadMore, scrollIntoViewRef }: ContentPropsType): JSX.Element {
    return (
        <div className="message-content">
            <div ref={inViewLoadMore.ref} />

            <div className="message-box">
                {messageData?.pages.map((page) =>
                    page.data.map((message) => {
                        return <MessageItem key={message.id} message={message} />;
                    }),
                )}
            </div>

            <div ref={scrollIntoViewRef} />
        </div>
    );
}

export default Content;
