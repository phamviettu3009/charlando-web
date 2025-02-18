import LeftSidebar from "components/LeftSidebar";
import Message from "components/Message";
import OutletView from "components/OutletView";
import useChannel, { UseChannelType } from "hooks/useChannel";
import useMessage, { UseMessageType } from "hooks/useMessage";
import useUser, { UseUserType } from "hooks/useUser";
import { Outlet } from "react-router-dom";

export type OutletPropsType = {
    channelHook: UseChannelType;
    messageHook: UseMessageType;
    userHook: UseUserType;
};

function Main() {
    const channelHook: UseChannelType = useChannel();
    const messageHook: UseMessageType = useMessage();
    const userHook: UseUserType = useUser();
    const outletProps: OutletPropsType = { channelHook, messageHook, userHook };

    return (
        <div className="d-flex">
            <LeftSidebar />
            <OutletView>
                <Outlet context={outletProps} />
            </OutletView>
            <Message messageHook={messageHook} />
        </div>
    );
}

export default Main;
