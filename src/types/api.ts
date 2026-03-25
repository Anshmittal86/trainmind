export interface SuccessResponseType<T> {
  statusCode: number;
  data?: T;
  message: string;
  success?: boolean;
}

export interface ErrorResponseType<T> {
  statusCode: number;
  message: string;
  success?: boolean;
  errors?: T;
}
