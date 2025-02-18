import MessageServiceImpl from "./../services/message";
import { useParams } from "react-router-dom";
import { ListResponse } from "types/ListResponse";
import Message from "types/Message";
import Page from "types/Page";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { RefObject, useEffect, useRef } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import { EMPTY_MESSAGE_PAGE } from "constants/message";

export interface UseMessageType {
    messageData: InfiniteData<Page<Message>, unknown> | undefined;
    inViewLoadMore: InViewHookResponse;
    scrollIntoViewRef: RefObject<HTMLDivElement>;
}

function useMessage(): UseMessageType {
    const { channelID } = useParams<{ channelID: string }>();
    const scrollIntoViewRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const inViewLoadMore: InViewHookResponse = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const fetchMessages = async ({ pageParam = 1 }): Promise<Page<Message>> => {
        if (channelID === "_" || channelID === undefined) return EMPTY_MESSAGE_PAGE;
        const response: ListResponse<Message> = await MessageServiceImpl.getMessages(channelID ?? "", pageParam);
        return {
            data: response.data,
            currentPage: pageParam,
            nextPage: response.meta?.last ? null : pageParam + 1,
        };
    };

    const {
        data: messageData,
        fetchNextPage,
        isFetched,
    } = useInfiniteQuery({
        queryKey: ["message", channelID],
        queryFn: fetchMessages,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

    useEffect(() => {
        if (scrollIntoViewRef.current) {
            scrollIntoViewRef.current.scrollIntoView();
        }
    }, [isFetched, channelID]);

    useEffect(() => {
        fetchNextPage();
    }, [inViewLoadMore.inView, fetchNextPage]);

    return { messageData, inViewLoadMore, scrollIntoViewRef };
}

export default useMessage;
