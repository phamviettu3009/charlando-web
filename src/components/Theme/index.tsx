import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "providers/ThemeProvider";
import { ThemeMode } from "constants/theme";
import { useTranslation } from "react-i18next";

function Theme(): JSX.Element {
    const context: ThemeContextType = useContext(ThemeContext);
    const { t } = useTranslation();

    return (
        <ToggleButtonGroup
            className="d-flex"
            value={context.option}
            size="small"
            color="primary"
            exclusive
            aria-label="Platform"
            onChange={(_, value: ThemeMode) => {
                context.changeTheme(value);
            }}
        >
            <ToggleButton className="flex-fill" value={ThemeMode.LIGHT}>
                {t("setting.theme.light")}
            </ToggleButton>
            <ToggleButton className="flex-fill" value={ThemeMode.DARK}>
                {t("setting.theme.dark")}
            </ToggleButton>
            <ToggleButton className="flex-fill" value={ThemeMode.DEFAULT}>
                {t("setting.theme.default")}
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default Theme;
