import Attachment from "types/Attachment";
import AttachmentView from "./AttachmentView";

type GroupAttachmentPropsType = {
    attachments: Attachment[];
};

function GroupAttachment({
    attachments,
}: GroupAttachmentPropsType): JSX.Element {
    return (
        <div className="attachment-group">
            {attachments.map((attachment) => {
                return (
                    <AttachmentView
                        key={attachment.id}
                        attachment={attachment}
                    />
                );
            })}
        </div>
    );
}

export default GroupAttachment;
