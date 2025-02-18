import Channel from "types/Channel";
import { ListResponse } from "types/ListResponse";
import { SIZE_PER_PAGE } from "constants/common";
import UserRole from "types/UserRole";
import PostChannelGroup from "types/PostChannelGroup";
import PutChannelGroup from "types/PutChannelGroup";
import ChannelMembers from "types/ChannelMembers";
import { ChannelService } from "./channel";
import { AxiosInstanceExpand } from "services/axios";

export function createChannelServiceInstance(axiosInstance: AxiosInstanceExpand): ChannelService {
    return new ChannelServiceImpl(axiosInstance);
}

class ChannelServiceImpl implements ChannelService {
    axiosInstance: AxiosInstanceExpand;

    constructor(axiosInstance: AxiosInstanceExpand) {
        this.axiosInstance = axiosInstance;
    }

    async getChannels(page: number, keyword: string): Promise<ListResponse<Channel>> {
        return await this.axiosInstance.get("/channels", {
            params: {
                page: page,
                sizePerPage: SIZE_PER_PAGE,
                keyword: keyword,
            },
        });
    }

    async getChannel(channelID: string): Promise<Channel> {
        return await this.axiosInstance.get(`channels/${channelID}`);
    }

    async getRole(channelID: string): Promise<UserRole> {
        return await this.axiosInstance.get(`channels/${channelID}/group/my-role`);
    }

    async createChannelGroup(postChannelGroup: PostChannelGroup): Promise<unknown> {
        return await this.axiosInstance.post("channels/group", postChannelGroup);
    }

    async updateChannel(channelID: string, putChannelGroup: PutChannelGroup): Promise<Channel> {
        return await this.axiosInstance.put(`channels/${channelID}/group`, putChannelGroup);
    }

    async removeMembers(channelID: string, channelMembers: ChannelMembers): Promise<Channel> {
        return await this.axiosInstance.post(`channels/${channelID}/group/remove-members`, channelMembers);
    }

    async addMembers(channelID: string, channelMembers: ChannelMembers): Promise<Channel> {
        return await this.axiosInstance.post(`channels/${channelID}/group/add-members`, channelMembers);
    }

    async leaveGroup(channelID: string): Promise<unknown> {
        return await this.axiosInstance.post(`channels/${channelID}/group/leave-group`);
    }

    async addAdminRole(channelID: string, channelMembers: ChannelMembers): Promise<unknown> {
        return await this.axiosInstance.post(`channels/${channelID}/group/set-admin-role`, channelMembers);
    }

    async revokeAdminRole(channelID: string, channelMembers: ChannelMembers): Promise<unknown> {
        return await this.axiosInstance.post(`channels/${channelID}/group/revoke-admin-role`, channelMembers);
    }

    async setOwnerRole(channelID: string, channelMembers: ChannelMembers): Promise<unknown> {
        return await this.axiosInstance.post(`channels/${channelID}/group/set-owner-role`, channelMembers);
    }
}

export default ChannelServiceImpl;
