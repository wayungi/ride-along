export interface LoginRequest {
  SERVICE: string;
  ACTION: string;
  username: string;
  password: string;
}

export interface RegisterRequest {
  SERVICE: string;
  ACTION: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string
}

export interface LoginResponse {
  token: string;
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