import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            constants: resolve(__dirname, "src/constants"),
            components: resolve(__dirname, "src/components"),
            hooks: resolve(__dirname, "src/hooks"),
            "mockup-data": resolve(__dirname, "src/mockup-data"),
            providers: resolve(__dirname, "src/providers"),
            router: resolve(__dirname, "src/router"),
            types: resolve(__dirname, "src/types"),
            utils: resolve(__dirname, "src/utils"),
            pages: resolve(__dirname, "src/pages"),
            services: resolve(__dirname, "src/services"),
            core: resolve(__dirname, "src/core"),
        },
    },
});
