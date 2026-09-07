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

// export interface JwtPayload {
//   sub: string;
//   email: string;
//   role: UserRole;
//   permissions: string[];
//   iat: number;
//   exp: number;
// }

export type UserRole = "USER" | "VEHICLE_OWNER" | "ADMIN";

export interface DecodedToken {
  email: string;
  permissions: string [];
  domain: "CLIENT_SIDE" | "BACK_OFFICE";
  role_code:  "CUSTOMER" | "ADMIN" | "OWNER";
  iat: number;
  exp: number;
}