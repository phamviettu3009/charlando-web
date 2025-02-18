import { useContext, useEffect } from "react";
import { ThemeContext, ThemeContextType } from "./providers/ThemeProvider";
import AppRouter from "router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import loginManager from "services/auth/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";

function App() {
    const queryClient: QueryClient = new QueryClient();
    const theme: ThemeContextType = useContext(ThemeContext);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const loggedIn: boolean = loginManager.loggedIn();
        if (loggedIn) {
            navigate("/message");
        } else {
            navigate("/login");
        }
    }, []);

    return (
        <div data-theme={theme.theme}>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </div>
    );
}

export default App;
