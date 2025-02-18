import { AttachmentType } from "constants/attachment";
import Attachment from "types/Attachment";
import "./attachment.scss";

type AttachmentViewPropsType = {
    attachment: Attachment;
};

function AttachmentView({ attachment }: AttachmentViewPropsType): JSX.Element {
    switch (attachment.type) {
        case AttachmentType.IMAGE_TYPE:
            return (
                <div className="attachment-item">
                    <img
                        alt=""
                        src="https://media.designrush.com/tinymce_images/402688/conversions/messenger-chat-app-design-content.jpg"
                    />
                </div>
            );
        case AttachmentType.VIDEO_TYPE:
            return (
                <video>
                    <source
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        type="video/mp4"
                    />
                </video>
            );
        case AttachmentType.AUDIO_TYPE:
            return <div></div>;
        default:
            return <div></div>;
    }
}

export default AttachmentView;
