import React, { Fragment } from "react";
import Message from "types/Message";
import IF from "../IF";
import { MessageRecordStatus, MessageType } from "constants/message";
import MessageBubble from "./MessageBubble";
import RenderAttachment from "./RenderAttachment";
import RenderReplyMessage from "./RenderReplyMessage";
import RenderMessageReaction from "./RenderMessageReaction";

type RenderMessagePropsType = {
    message: Message;
};

function RenderMessage({ message }: RenderMessagePropsType): JSX.Element {
    return (
        <Fragment>
            <IF condition={message.recordStatus === MessageRecordStatus.DELETE}>
                <span className="message-item__delete">{message.subMessage}</span>
            </IF>

            <IF condition={message.recordStatus !== MessageRecordStatus.DELETE}>
                <RenderReplyMessage reply={message.reply} />

                <IF condition={message.type === MessageType.MESSAGE}>
                    <MessageBubble message={message} />
                </IF>

                <IF condition={message.type === MessageType.ICON_MESSAGE}>
                    <span className="message-item__emoji fs-1">{message.iconMessage}</span>
                </IF>

                <IF condition={message.type === MessageType.ATTACHMENTS}>
                    <MessageBubble message={message} />
                    <RenderAttachment attachments={message.attachments ?? []} />
                </IF>

                <RenderMessageReaction messageReactions={message.messageReactions} />
            </IF>
        </Fragment>
    );
}

export default RenderMessage;
