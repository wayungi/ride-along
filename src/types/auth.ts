export interface LoginRequest {
  SERVICE: string;
  ACTION: string;
  email: string;
  password: string;
}

export interface LoginResponseObject {
  token: string;
}

export interface LoginResponse {
  responseObject: LoginResponseObject;
  responseCode: number;
  responseMessage: string
}

