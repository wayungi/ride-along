import type { LoginRequest, LoginResponse} from "../types/auth";
import { apiClient } from "../api/apiClient";

export const loginRequest = async (email: string, password: string): Promise<LoginResponse> => {

  const request: LoginRequest = {
    SERVICE: "Auth",
    ACTION: "login",
    email,
    password,
  };

  return apiClient<LoginResponse>("", {
    method: "POST",
    body: JSON.stringify(request),
  });
};
