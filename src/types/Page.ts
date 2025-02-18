export default interface Page<T> {
    data: T[];
    currentPage: number;
    nextPage: number | null;
}
