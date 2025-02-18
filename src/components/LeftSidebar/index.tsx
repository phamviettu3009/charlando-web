import Line from "../Line";
import Menu from "../Menu";
import MyProfile from "../MyProfile";
import LogoutIcon from "@mui/icons-material/Logout";
import "./left-sidebar.scss";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import loginManager from "services/auth/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";

function LeftSidebar(): JSX.Element {
    const { t } = useTranslation();
    const navigate: NavigateFunction = useNavigate();

    const logout = () => {
        loginManager.logout();
        navigate("/login");
    };

    return (
        <div className="left-sidebar">
            <MyProfile />
            <Line className="mt-3 mb-3" width={"100%"} />
            <Menu />

            <Button
                className="mt-auto"
                variant="outlined"
                startIcon={<LogoutIcon className="menu-item__label" fontSize="small" />}
                onClick={logout}
            >
                {t("logout")}
            </Button>
        </div>
    );
}

export default LeftSidebar;
