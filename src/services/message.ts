import { ListResponse } from "types/ListResponse";
import Message from "types/Message";
import axiosInstance from "./axios";
import { SIZE_PER_PAGE_MESSAGE } from "constants/common";
import PostMessage from "types/PostMessage";
import PostMessageReaction from "types/PostMessageReaction";
import PutMessage from "types/PutMessage";
import { DeleteMessageOption } from "constants/message";
import UserAvatar from "types/UserAvatar";

export interface MessageService {
    getMessages: (channelID: string, page: number) => Promise<ListResponse<Message>>;
    syncMessage: (channelID: string, postMessage: PostMessage) => Promise<Message>;
    syncMessageReaction: (channelID: string, postMessageReaction: PostMessageReaction) => Promise<Message>;
    syncUpdateMessage: (messageID: string, putMessage: PutMessage) => Promise<Message>;
    syncDeleteMessage: (messageID: string, options: DeleteMessageOption) => Promise<Message>;
    readMessage: (messageID: string) => Promise<UserAvatar[]>;
}

const MessageServiceImpl: MessageService = {
    getMessages: async (channelID: string, page: number): Promise<ListResponse<Message>> => {
        return await axiosInstance.get(`/messages/channels/${channelID}`, {
            params: {
                page: page,
                sizePerPage: SIZE_PER_PAGE_MESSAGE,
            },
        });
    },

    syncMessage: async (channelID: string, postMessage: PostMessage): Promise<Message> => {
        return axiosInstance.post(`messages/channels/${channelID}`, postMessage);
    },

    syncMessageReaction: async (channelID: string, postMessageReaction: PostMessageReaction): Promise<Message> => {
        return axiosInstance.post(`messages/${channelID}/reaction`, postMessageReaction);
    },

    syncUpdateMessage: async (messageID: string, putMessage: PutMessage): Promise<Message> => {
        return axiosInstance.put(`messages/${messageID}`, putMessage);
    },

    syncDeleteMessage: async (messageID: string, options: DeleteMessageOption): Promise<Message> => {
        const deleteOption: string = options === DeleteMessageOption.FOR_ALL ? "/for-all" : "/for-owner";
        return axiosInstance.delete(`messages/${messageID}${deleteOption}`);
    },

    readMessage: async (messageID: string): Promise<UserAvatar[]> => {
        return axiosInstance.post(`messages/${messageID}/read-message`);
    },
};

export default MessageServiceImpl;
