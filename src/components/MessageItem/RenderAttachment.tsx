import IF from "../IF";
import Attachment from "types/Attachment";
import SingleAttachment from "../Attachment/SingleAttachment";
import GroupAttachment from "../Attachment/GroupAttachment";

type RenderAttachmentPropsType = React.HTMLProps<HTMLDivElement> & {
    attachments: Attachment[];
};

function RenderAttachment({ attachments, ...rest }: RenderAttachmentPropsType): JSX.Element {
    return (
        <IF condition={attachments.length >= 1}>
            <div className={`message-item__attachment ${rest.className ?? ""}`}>
                <IF condition={attachments.length === 1}>
                    <SingleAttachment attachment={attachments[0]} />
                </IF>

                <IF condition={attachments.length > 1}>
                    <GroupAttachment attachments={attachments} />
                </IF>
            </div>
        </IF>
    );
}

export default RenderAttachment;
