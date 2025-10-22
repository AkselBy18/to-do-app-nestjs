export interface ResponseData<T> {
    data: T;
    message: string;
    success: boolean;
    statusCode: number;
}