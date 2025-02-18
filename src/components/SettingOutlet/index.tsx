import Theme from "components/Theme";
import "./setting.scss";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useTranslation } from "react-i18next";

function SettingOutlet(): JSX.Element {
    const { t, i18n } = useTranslation();

    return (
        <div className="setting">
            <label className="setting__label">{t("setting.theme.label")}</label>
            <Theme />

            <label className="setting__label">{t("setting.language.label")}</label>
            <div>
                <Select
                    fullWidth
                    value={i18n.language}
                    size="small"
                    className="language"
                    onChange={(e: SelectChangeEvent<string>) => {
                        i18n.changeLanguage(e.target.value);
                    }}
                >
                    <MenuItem value={"vi"}>{t("setting.language.vietnam")}</MenuItem>
                    <MenuItem value={"en"}>{t("setting.language.english")}</MenuItem>
                </Select>
            </div>

            <Button fullWidth variant="outlined">
                {t("setting.device_manager")}
            </Button>

            <Button fullWidth variant="outlined">
                {t("setting.change_password")}
            </Button>
        </div>
    );
}

export default SettingOutlet;
