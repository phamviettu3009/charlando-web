import { SIZE_PER_PAGE } from "constants/common";
import { ListResponse } from "types/ListResponse";
import User from "types/User";
import axiosInstance from "./axios";
import FriendRelationship from "types/FriendRelationship";
import Member from "types/Member";
import UserExpand from "types/UserExpand";
import { UserUpdateRequest } from "types/UserUpdateRequest";
import Setting from "types/Setting";

export interface UserService {
    getUsers: (page: number, keyword: string) => Promise<ListResponse<User>>;
    getListFriend: (page: number, keyword: string) => Promise<ListResponse<User>>;
    getListMemberInChannel: (channelID: string, page: number) => Promise<ListResponse<Member>>;
    getListRequestAddFriend: (page: number, keyword: string) => Promise<ListResponse<User>>;
    getListFriendOutsideChannel: (channelID: string, page: number, keyword: string) => Promise<ListResponse<User>>;
    getUser: () => Promise<User>;
    getUserInfo: (userID: string) => Promise<UserExpand>;
    getNumberRequestAddFriend: () => Promise<void>;
    updateUser: (userUpdateRequest: UserUpdateRequest) => Promise<User>;
    updateSetting: (setting: Setting) => Promise<Setting>;
    sendRequestAddFriend: (friendID: string) => Promise<FriendRelationship>;
    confirmAddFriend: (friendID: string) => Promise<FriendRelationship>;
    cancelRequestAddFriend: (friendID: string) => Promise<FriendRelationship>;
    unfriend: (friendID: string) => Promise<FriendRelationship>;
    rejectFriendRequest: (friendID: string) => Promise<FriendRelationship>;
}

const UserServiceImpl: UserService = {
    getUsers: async (page: number, keyword: string): Promise<ListResponse<User>> => {
        return await axiosInstance.get("/users", {
            params: {
                page: page,
                sizePerPage: SIZE_PER_PAGE,
                keyword: keyword,
            },
        });
    },

    getListFriend: async (page: number, keyword: string): Promise<ListResponse<User>> => {
        return await axiosInstance.get("friends", {
            params: {
                page: page,
                sizePerPage: SIZE_PER_PAGE,
                keyword: keyword,
            },
        });
    },

    getListMemberInChannel: async (channelID: string, page: number): Promise<ListResponse<Member>> => {
        return await axiosInstance.get(`channels/${channelID}/members`, {
            params: {
                page: page,
                sizePerPage: "99",
            },
        });
    },

    getListRequestAddFriend: async (page: number, keyword: string): Promise<ListResponse<User>> => {
        return await axiosInstance.get("friends/request-add-friend", {
            params: {
                page: page,
                sizePerPage: SIZE_PER_PAGE,
                keyword: keyword,
            },
        });
    },

    getListFriendOutsideChannel: async (
        channelID: string,
        page: number,
        keyword: string,
    ): Promise<ListResponse<User>> => {
        return await axiosInstance.get(`friends/channels/${channelID}/outside`, {
            params: {
                page: page,
                sizePerPage: SIZE_PER_PAGE,
                keyword: keyword,
            },
        });
    },

    getUser: async (): Promise<User> => {
        return await axiosInstance.get("/users/self");
    },

    getUserInfo: async (userID: string): Promise<UserExpand> => {
        return await axiosInstance.get(`users/${userID}`);
    },

    getNumberRequestAddFriend: async (): Promise<void> => {
        return await axiosInstance.get("friends/number-request-add-friend");
    },

    updateUser: async (userUpdateRequest: UserUpdateRequest): Promise<User> => {
        return await axiosInstance.put("users/self", userUpdateRequest);
    },

    updateSetting: async (setting: Setting): Promise<Setting> => {
        return await axiosInstance.put("users/self/setting", setting);
    },

    sendRequestAddFriend: async (friendID: string): Promise<FriendRelationship> => {
        return await axiosInstance.post(`friends/${friendID}/send-request-add-friend`);
    },

    confirmAddFriend: async (friendID: string): Promise<FriendRelationship> => {
        return await axiosInstance.post(`friends/${friendID}/confirmation-add-friend`);
    },

    cancelRequestAddFriend: async (friendID: string): Promise<FriendRelationship> => {
        return await axiosInstance.post(`friends/${friendID}/cancel-request-add-friend`);
    },

    unfriend: async (friendID: string): Promise<FriendRelationship> => {
        return await axiosInstance.post(`friends/${friendID}/unfriend`);
    },

    rejectFriendRequest: async (friendID: string): Promise<FriendRelationship> => {
        return await axiosInstance.post(`friends/${friendID}/reject-friend-request`);
    },
};

export default UserServiceImpl;
