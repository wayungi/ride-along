import type { LoginRequest, RegisterRequest} from "../types/auth";
import { apiClient } from "../api/apiClient";
import type { ApiResponse } from "../types/api";
import type { LoginResponse } from "../types/auth";

export const loginRequest = async (username: string, password: string): Promise<ApiResponse<LoginResponse>> => {
  const request: LoginRequest = {
    SERVICE: "Auth",
    ACTION: "login",
    username,
    password,
  };

  return apiClient<LoginResponse>("", {
    method: "POST",
    body: JSON.stringify(request),
  });
};




export const registerRequest = async (email: string, password: string, firstname: string, lastname: string): Promise<ApiResponse<string>>=> {
  const request: RegisterRequest = {
    SERVICE: "Auth",
    ACTION: "register",
    email,
    password,
    firstname,
    lastname,
  };

  return apiClient<string>("", {
    method: "POST",
    body: JSON.stringify(request),
  });


};

