import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: "vi",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    menu: {
                        messages: "Messages",
                        users: "Users",
                        setting: "Setting",
                    },
                    time: {
                        just_now: "Just now",
                        seconds_ago: "{{seconds}} seconds ago",
                        minutes_ago: "{{minutes}} minutes ago",
                    },
                    status: {
                        online: "Online",
                        offline: "Offline",
                    },
                    messages: {},
                    users: {},
                    setting: {
                        theme: {
                            label: "Theme",
                            light: "Light",
                            dark: "Dark",
                            default: "Default",
                        },
                        language: {
                            label: "Language",
                            vietnam: "Việt nam",
                            english: "English",
                        },
                        device_manager: "Device manager",
                        change_password: "Change password",
                    },
                    search: "Search",
                    logout: "Logout",
                },
            },

            vi: {
                translation: {
                    menu: {
                        messages: "Tin nhắn",
                        users: "Người dùng",
                        setting: "Cài đặt",
                    },
                    time: {
                        just_now: "Vừa mới",
                        seconds_ago: "{{seconds}} giây trước",
                        minutes_ago: "{{minutes}} phút trước",
                    },
                    status: {
                        online: "Trực tuyến",
                        offline: "Ngoại tuyến",
                    },
                    messages: {},
                    users: {},
                    setting: {
                        theme: {
                            label: "Chủ đề",
                            light: "Sáng",
                            dark: "Tối",
                            default: "Mặc định",
                        },
                        language: {
                            label: "Ngôn ngữ",
                            vietnam: "Việt nam",
                            english: "English",
                        },
                        device_manager: "Quản lý thiết bị",
                        change_password: "Đổi mật khẩu",
                    },
                    search: "Tìm kiếm",
                    logout: "Đăng xuất",
                },
            },
        },
    });

export default i18n;
