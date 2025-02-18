import UserCircleCard from "components/UserCircleCard";
import { friendData } from "mockup-data/friend";
import User from "types/User";

function Friend(): JSX.Element {
    const listFriend: User[] = friendData;

    return (
        <div className="contact__friend">
            {listFriend.map((user) => {
                return <UserCircleCard key={user.id} user={user} />;
            })}
        </div>
    );
}

export default Friend;
