import Setting from "./Setting";

export default interface User {
    id: string;
    fullName: string;
    avatar: string | null;
    online: boolean;
    coverPhoto: string | null;
    gender: string | null;
    dob: string | null;
    phone: string | null;
    email: string | null;
    countryCode: string | null;
    languageCode: string | null;
    setting: Setting | null;
}
