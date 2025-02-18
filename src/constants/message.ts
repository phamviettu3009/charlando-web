import Message from "types/Message";
import Page from "types/Page";

export enum MessageType {
    MESSAGE = 1,
    ATTACHMENTS = 2,
    ICON_MESSAGE = 3,
}

export enum MessageRecordStatus {
    DELETE = "DELETE",
}

export enum DeleteMessageOption {
    FOR_ALL,
    FOR_OWNER,
}

export const EMPTY_MESSAGE_PAGE: Page<Message> = {
    data: [],
    currentPage: 1,
    nextPage: null,
};
