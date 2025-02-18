import AttachmentView from "./AttachmentView";
import Attachment from "types/Attachment";

type SingleAttachmentPropsType = {
    attachment: Attachment;
};

function SingleAttachment({
    attachment,
}: SingleAttachmentPropsType): JSX.Element {
    return (
        <div className="attachment-single">
            <AttachmentView attachment={attachment} />
        </div>
    );
}

export default SingleAttachment;
