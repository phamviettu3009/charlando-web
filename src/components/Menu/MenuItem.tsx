import { NavigateFunction, useNavigate } from "react-router-dom";
import "./menu.scss";
import { useTranslation } from "react-i18next";

type MessagePropsType = React.HTMLProps<HTMLDivElement> & {
    label: string;
    leading?: JSX.Element | null;
    trailing?: JSX.Element | null;
    to?: string;
};

function MenuItem(props: MessagePropsType): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    const { t } = useTranslation();
    const { label, leading, trailing, to, ...rest } = props;

    const navigationHandle = () => {
        if (to) navigate(to);
    };

    return (
        <div {...rest} className={`menu-item ${rest.className ?? ""}`} onClick={navigationHandle}>
            {leading}
            <span className="menu-item__label ms-1">{t(label)}</span>
            <div className="ms-auto">{trailing}</div>
        </div>
    );
}

export default MenuItem;
