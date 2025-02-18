import { EMPTY_AVATAR_URL } from "constants/common";
import "./avatar.scss";
import ImageCache from "components/ImageCache";

type SingleAvatarPropsType = React.HTMLProps<HTMLDivElement> & {
    avatar?: string | null;
};

function SingleAvatar({ avatar, ...rest }: SingleAvatarPropsType): JSX.Element {
    return (
        <ImageCache
            resourceID={avatar}
            renderImage={(src) => (
                <img alt="" src={src ?? EMPTY_AVATAR_URL} className={`avatar avatar--circle ${rest.className ?? ""}`} />
            )}
        />
    );
}

export default SingleAvatar;
