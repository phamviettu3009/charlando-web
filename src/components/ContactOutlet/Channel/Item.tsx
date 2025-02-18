import OnlineStatus from "components/OnlineStatus";
import Channel from "types/Channel";
import ChannelAvatar from "./Avatar";
import Message from "./Message";
import { Badge } from "@mui/material";

type ChannelItemPropsType = React.HTMLProps<HTMLDivElement> & {
    channel: Channel;
};

function ChannelItem({ channel, ...rest }: ChannelItemPropsType): JSX.Element {
    return (
        <div {...rest} className={`channel__item ${rest.className ?? ""}`}>
            <OnlineStatus online={channel.online}>
                <ChannelAvatar avatars={channel.avatars} />
            </OnlineStatus>
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                    <div className="channel__name">{channel.name}</div>
                    <div className={`channel__time-of-message-sent-display--${channel.read ? "read" : "unread"}`}>
                        {channel.message?.timeOfMessageSentDisplay}
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className={`channel__message channel__message--${channel.read ? "read" : "unread"}`}>
                        {channel.message && <Message message={channel.message} read={channel.read} />}
                    </div>
                    <Badge className="me-3 mt-3" color="error" badgeContent={channel.unreadCounter} />
                </div>
            </div>
        </div>
    );
}

export default ChannelItem;
