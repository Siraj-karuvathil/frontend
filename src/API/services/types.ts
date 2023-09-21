export type Response<T> = {
    message: string;
    statusCode: number;
    data: T;
}