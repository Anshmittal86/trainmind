import { ErrorResponseType } from '@/types/api';
class ApiError<T> extends Error implements ErrorResponseType<T> {
  public success?: boolean = false;
  constructor(
    public statusCode: number,
    public message: string = 'Something went wrong.',
    public errors?: T,
    stack: string = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;

    Object.setPrototypeOf(this, new.target.prototype);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRequest(message = 'Bad request') {
    return new ApiError(400, message);
  }

  static unauthorized(message = 'Unauthorized') {
    return new ApiError(401, message);
  }

  static notfound(message = 'notfound') {
    return new ApiError(404, message);
  }

  static internalServerError(message = 'Internal Server Error') {
    return new ApiError(500, message);
  }
}

export default ApiError;
