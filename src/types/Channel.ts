import Reader from "./Reader";
import ShortenMessage from "./ShortenMessage";

export default interface Channel {
    id: string;
    name: string;
    type: number;
    avatars: string[];
    recordStatus: string | null;
    read: boolean;
    online: boolean;
    message: ShortenMessage | null;
    readers: Reader[];
    unreadCounter: number;
    sort: string;
    keywords: string;
}
