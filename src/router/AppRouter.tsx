import { Navigate, Route, Routes } from "react-router-dom";

import ContactOutlet from "components/ContactOutlet";
import UserOutlet from "components/UserOutlet";
import SettingOutlet from "components/SettingOutlet";
import LoginPage from "pages/login";
import Main from "pages/Main";
import NotFoundPage from "pages/not-found";

function AppRouter(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/" />} />
            <Route path="/" element={<Main />}>
                <Route index element={<Navigate to="message/" />} />
                <Route path="message/" element={<ContactOutlet />} />
                <Route path="message/:channelID" element={<ContactOutlet />} />
                <Route path="user/:channelID" element={<UserOutlet />} />
                <Route path="setting/:channelID" element={<SettingOutlet />}></Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRouter;
