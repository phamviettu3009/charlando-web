import SingleAvatar from "components/Avatar/SingleAvatar";
import { useTranslation } from "react-i18next";

function Header(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="message-header">
            <SingleAvatar />
            <div>
                <div className="message-header__channel-name">Taylor swift</div>
                <div className="message-header__channel-status--online">
                    {t("status.online")}
                </div>
            </div>
        </div>
    );
}

export default Header;
