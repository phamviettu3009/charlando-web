import "./user-circle-card.scss";
import OnlineStatus from "../OnlineStatus";
import User from "types/User";
import SingleAvatar from "../Avatar/SingleAvatar";

type UserCircleCardPropsType = {
    user: User;
};

function UserCircleCard({ user }: UserCircleCardPropsType): JSX.Element {
    return (
        <div className="user-circle-card">
            <OnlineStatus online={user.online}>
                <SingleAvatar avatar={user.avatar} />
            </OnlineStatus>
            <span className="user-circle-card__name">{user.fullName}</span>
        </div>
    );
}

export default UserCircleCard;
