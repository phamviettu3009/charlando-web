import { Fragment } from "react/jsx-runtime";
import User from "types/User";
import IF from "../IF";
import SingleAvatar from "../Avatar/SingleAvatar";

type AvatarPropsType = React.HTMLProps<HTMLDivElement> & {
    hide: boolean;
    user: User | null;
};

function Avatar({ hide, ...rest }: AvatarPropsType) {
    return (
        <Fragment>
            <IF condition={!hide}>
                <div className="message-item-wrapper">
                    <SingleAvatar className="message-item-wrapper__avatar" />
                    {rest.children}
                </div>
            </IF>

            <IF condition={hide}>{rest.children}</IF>
        </Fragment>
    );
}

export default Avatar;
