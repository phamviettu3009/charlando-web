import channelService from "services/channel/channel";
import Channel from "types/Channel";
import { ListResponse } from "types/ListResponse";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import Page from "types/Page";
import { useEffect } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

export interface UseChannelType {
    channelData: InfiniteData<Page<Channel>, unknown> | undefined;
}

function useChannel(): UseChannelType {
    const { channelID } = useParams<{ channelID: string }>();
    const navigate: NavigateFunction = useNavigate();

    const fetchChannels = async ({ pageParam = 1 }): Promise<Page<Channel>> => {
        const response: ListResponse<Channel> = await channelService.getChannels(pageParam, "");
        return {
            data: response.data,
            currentPage: pageParam,
            nextPage: response.meta?.last ? null : pageParam + 1,
        };
    };

    const { data: channelData } = useInfiniteQuery({
        queryKey: ["channel"],
        queryFn: fetchChannels,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });

    const firstChannel: Channel | undefined = channelData?.pages[0].data[0];

    useEffect(() => {
        if (channelID === undefined && firstChannel) {
            navigate(`/message/${firstChannel?.id}`);
        }
    }, [firstChannel, channelID, navigate]);

    return { channelData };
}

export default useChannel;
