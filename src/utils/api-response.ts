import { SuccessResponseType } from '@/types/api';

class ApiResponse<T> implements SuccessResponseType<T> {
  public success?: boolean;
  constructor(
    public statusCode: number,
    public message: string = 'success',
    public data: T,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }

  static ok(message = 'success', data = null) {
    return new ApiResponse(200, message, data);
  }
}

export default ApiResponse;
