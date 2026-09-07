export interface ApiResponse<T> {
  returnbject: T;
  returnCode: number;
  returnMessage: string;
}

export class ApiError extends Error {
  status: number;
  code: number;

  constructor( message: string, status: number, code: number ) {
    super(message);

    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}
