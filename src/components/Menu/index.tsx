import MenuItem from "./MenuItem";
import { menuItems } from "constants/menu";
import { useLocation, useParams } from "react-router-dom";
import { Location } from "@remix-run/router";

function Menu(): JSX.Element {
    const location: Location = useLocation();
    const currentEndpoint: string = location.pathname.split("/")[1];
    const { channelID } = useParams<{ channelID: string }>();

    return (
        <div className="menu">
            {menuItems.map((item) => {
                return (
                    <MenuItem
                        className={currentEndpoint === item.key ? "menu-item--active" : ""}
                        key={item.key}
                        label={item.label}
                        leading={item.leading}
                        trailing={item.trailing}
                        to={item.to + "/" + channelID}
                    />
                );
            })}
        </div>
    );
}

export default Menu;
