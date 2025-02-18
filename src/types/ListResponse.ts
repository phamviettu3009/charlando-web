export interface ListResponse<T> {
    data: T[];
    meta?: Meta;
}

export interface Meta {
    currentPage: number;
    totalPages: number;
    sizePerPage: number;
    totalElements: number;
    numberOfElements: number;
    last: boolean;
}
