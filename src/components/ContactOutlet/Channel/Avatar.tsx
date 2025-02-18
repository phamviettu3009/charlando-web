import GroupAvatar from "components/Avatar/GroupAvatar";
import SingleAvatar from "components/Avatar/SingleAvatar";

type ChannelAvatarPropsType = {
    avatars: string[];
};

function ChannelAvatar({ avatars }: ChannelAvatarPropsType): JSX.Element {
    if (avatars.length <= 1) {
        return <SingleAvatar avatar={avatars[0]} />;
    }

    return <GroupAvatar avatars={avatars} />;
}

export default ChannelAvatar;
