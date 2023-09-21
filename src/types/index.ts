export interface Response<T = null> {
	statusCode: number;
	message: string;
	data: T;
}