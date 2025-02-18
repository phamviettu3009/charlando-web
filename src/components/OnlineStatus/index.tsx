import React from "react";
import "./online-status.scss";

type OnlineStatusPropsType = React.HTMLProps<HTMLDivElement> & {
    online: boolean;
};

function OnlineStatus(props: OnlineStatusPropsType): JSX.Element {
    const { online, ...rest } = props;

    return (
        <div className="online-status" {...rest}>
            {rest.children}
            <div
                className={`online-status__dot--${
                    online ? "online" : "offline"
                }`}
            />
        </div>
    );
}

export default OnlineStatus;
