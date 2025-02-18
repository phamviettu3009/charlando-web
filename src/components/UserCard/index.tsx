import { Card } from "@mui/material";
import "./user-card.scss";
import SingleAvatar from "components/Avatar/SingleAvatar";
import User from "types/User";
import ImageCache from "components/ImageCache";

type UserCardPropsType = {
    user: User;
};

function UserCard({ user }: UserCardPropsType) {
    return (
        <Card variant="outlined" className="user-card">
            <div className="user-card-info">
                <SingleAvatar className="avatar--small" avatar={user.avatar} />
                <p className="user-card-info__name">{user.fullName}</p>
            </div>

            <ImageCache
                resourceID={user.coverPhoto}
                renderImage={(src) => src && <img className="user-card__cover-photo" alt="" src={src} />}
            />
        </Card>
    );
}

export default UserCard;
