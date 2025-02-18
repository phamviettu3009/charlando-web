import { useState } from "react";
import { ThemeMode } from "../constants/theme";

function useTheme(): object {
    const [theme, setTheme] = useState<ThemeMode>();

    return { setTheme };
}

export default useTheme;
