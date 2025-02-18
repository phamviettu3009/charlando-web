import { useInfiniteQuery } from "@tanstack/react-query";
import UserServiceImpl from "./../services/user";
import { ListResponse } from "types/ListResponse";
import Page from "types/Page";
import User from "types/User";

export interface UseUserType {
    users: User[];
}

function useUser(): UseUserType {
    const fetchUsers = async ({ pageParam = 1 }): Promise<Page<User>> => {
        const response: ListResponse<User> = await UserServiceImpl.getUsers(pageParam, "");
        return {
            data: response.data,
            currentPage: pageParam,
            nextPage: response.meta?.last ? null : pageParam + 1,
        };
    };

    const { data: userData } = useInfiniteQuery({
        queryKey: ["user"],
        queryFn: fetchUsers,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

    const users: User[] | undefined = userData?.pages.reduce<User[]>((target, value) => {
        return [...target, ...value.data];
    }, []);

    return { users: users ?? [] };
}

export default useUser;
