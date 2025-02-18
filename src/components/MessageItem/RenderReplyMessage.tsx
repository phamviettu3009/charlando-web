import Reply from "types/Reply";
import IF from "../IF";
import RenderAttachment from "./RenderAttachment";

type RenderReplyMessagePropsType = {
    reply?: Reply | null;
};

function RenderReplyMessage({
    reply,
}: RenderReplyMessagePropsType): JSX.Element {
    return (
        <IF condition={reply}>
            <div className="reply-message">
                <RenderAttachment attachments={reply?.attachments ?? []} />
                <IF condition={reply?.message}>
                    <p className="reply-message__text">{reply?.message}</p>
                </IF>
            </div>
        </IF>
    );
}

export default RenderReplyMessage;
