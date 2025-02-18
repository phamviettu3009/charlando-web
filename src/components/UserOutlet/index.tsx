import UserCard from "components/UserCard";
import "./user.scss";
import StaggeredGird from "components/StaggeredGird";
import { useOutletContext } from "react-router-dom";
import { OutletPropsType } from "pages/Main";

function UserOutlet(): JSX.Element {
    const { userHook }: OutletPropsType = useOutletContext();
    const { users } = userHook;

    return (
        <div className="user">
            <StaggeredGird columns={{ xl: 2, lg: 1 }} data={users} renderItem={(user) => <UserCard user={user} />} />
        </div>
    );
}

export default UserOutlet;
