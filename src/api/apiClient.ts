import { ApiError } from "../types/api";
import { getStoredToken } from "../utils/jwt-utils";
import type { ApiResponse } from "../types/api";

const API_URL = import.meta.env.VITE_API_URL;

export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {

  const token = getStoredToken();
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data: ApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data?.returnMessage || "Something went wrong",
        response.status,
        data?.returnCode ?? -1
      );
    }

    if (data.returnCode !== 0) {
      throw new ApiError(
        data.returnMessage || "Request failed",
        response.status,
        data.returnCode
      );
    }

    return data;
    
  } catch (error) {

    if (error instanceof ApiError) {
      throw error;
    }

    const isNetworkError = error instanceof TypeError && error.message === "Failed to fetch";
    throw new ApiError(
      isNetworkError ? "Unable to connect to the server" : "Invalid response from server",
      isNetworkError ? 0 : 500,
      -1
    );
  }
};

