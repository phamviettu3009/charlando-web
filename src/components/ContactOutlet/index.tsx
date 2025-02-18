import { useTranslation } from "react-i18next";
import "./contact.scss";
import Friend from "./Friend";
import ListChannel from "./Channel";
import TextField from "components/TextField";

function ContactOutlet(): JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="contact">
            <Friend />
            <div className="p-3">
                <TextField className="input--rounded-full" placeholder={t("search")} />
            </div>
            <ListChannel />
        </div>
    );
}

export default ContactOutlet;
