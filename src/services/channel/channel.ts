import Channel from "types/Channel";
import { ListResponse } from "types/ListResponse";
import PostChannelGroup from "types/PostChannelGroup";
import PutChannelGroup from "types/PutChannelGroup";
import UserRole from "types/UserRole";
import ChannelMembers from "types/ChannelMembers";
import { createChannelServiceInstance } from "./channelImpl";
import axiosInstance from "../axios";

export interface ChannelService {
    getChannels: (page: number, keyword: string) => Promise<ListResponse<Channel>>;
    getChannel: (channelID: string) => Promise<Channel>;
    getRole: (channelID: string) => Promise<UserRole>;
    createChannelGroup: (postChannelGroup: PostChannelGroup) => Promise<unknown>;
    updateChannel: (channelID: string, putChannelGroup: PutChannelGroup) => Promise<Channel>;
    removeMembers: (channelID: string, channelMembers: ChannelMembers) => Promise<Channel>;
    addMembers: (channelID: string, channelMembers: ChannelMembers) => Promise<Channel>;
    leaveGroup: (channelID: string) => Promise<unknown>;
    addAdminRole: (channelID: string, channelMembers: ChannelMembers) => Promise<unknown>;
    revokeAdminRole: (channelID: string, channelMembers: ChannelMembers) => Promise<unknown>;
    setOwnerRole: (channelID: string, channelMembers: ChannelMembers) => Promise<unknown>;
}

const channelService: ChannelService = createChannelServiceInstance(axiosInstance);
export default channelService;
