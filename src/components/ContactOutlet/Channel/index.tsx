import { NavigateFunction, useNavigate, useOutletContext, useParams } from "react-router-dom";
import ChannelItem from "./Item";
import { OutletPropsType } from "pages/Main";

function ListChannel(): JSX.Element {
    const { channelID } = useParams<{ channelID: string }>();
    const { channelHook }: OutletPropsType = useOutletContext();
    const { channelData } = channelHook;
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className="channel__list">
            {channelData?.pages.map((page) =>
                page.data.map((channel) => (
                    <ChannelItem
                        className={channelID === channel.id ? "channel__item--active" : ""}
                        onClick={() => navigate(`/message/${channel.id}`)}
                        key={channel.id}
                        channel={channel}
                    />
                )),
            )}
        </div>
    );
}

export default ListChannel;
