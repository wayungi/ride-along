import type { LoginRequest, LoginResponse} from "../types/auth";


const API_URL = "http://localhost:8080/api/v1";

export const loginRequest = async (email: string, password: string): Promise<LoginResponse> => {

  const request: LoginRequest = { 
    SERVICE: "Auth",
    ACTION: "login",
    email, 
    password
  };

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) throw new Error("Unable to connect to the server");
  const data: LoginResponse = await response.json();
  if (data.responseCode !== 0) throw new Error("Invalid email or password");
  

  return data;
};

