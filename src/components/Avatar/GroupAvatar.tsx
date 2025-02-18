import { EMPTY_AVATAR_URL } from "constants/common";
import "./avatar.scss";
import ImageCache from "components/ImageCache";

type GroupAvatarPropsType = {
    avatars: string[];
};

function GroupAvatar({ avatars }: GroupAvatarPropsType): JSX.Element {
    return (
        <div className="avatar">
            <ImageCache
                resourceID={avatars[0]}
                renderImage={(src) => (
                    <img alt="" src={src || EMPTY_AVATAR_URL} className="avatar__secondary avatar--circle" />
                )}
            />

            <ImageCache
                resourceID={avatars[1]}
                renderImage={(src) => (
                    <img alt="" src={src || EMPTY_AVATAR_URL} className="avatar__primary avatar--circle" />
                )}
            />
        </div>
    );
}

export default GroupAvatar;
