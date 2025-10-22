import { ResponseData } from "../interfaces/response.interface";

export class ResponseHandler {
    
    public static success<T>(data: T, message: string = 'Success', statusCode: number = 200): ResponseData<T> {
        return {
            data,
            message,
            success: true,
            statusCode,
        };
    }


    public static error(message: string, statusCode: number = 500): ResponseData<null> {
        console.log(`Error: ${message}, Status Code: ${statusCode}`);
        
        return {
            data: null,
            message,
            success: false,
            statusCode,
        };
    }
}