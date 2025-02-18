import { Badge } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";

type MenuItemType = {
    key: string;
    label: string;
    to: string;
    leading: JSX.Element | null;
    trailing: JSX.Element | null;
};

export const menuItems: MenuItemType[] = [
    {
        key: "message",
        label: "menu.messages",
        to: "/message",
        leading: <MessageIcon className="menu-item__label" fontSize="small" />,
        trailing: <Badge className="me-2" badgeContent={4} color="error" />,
    },
    {
        key: "user",
        label: "menu.users",
        to: "/user",
        leading: <PeopleIcon className="menu-item__label" fontSize="small" />,
        trailing: null,
    },
    {
        key: "setting",
        label: "menu.setting",
        to: "/setting",
        leading: <SettingsIcon className="menu-item__label" fontSize="small" />,
        trailing: null,
    },
];
