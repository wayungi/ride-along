import { ApiError } from "../types/api";
import { getStoredToken } from "../utils/jwt-utils";

const API_URL = import.meta.env.VITE_API_URL;

export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {

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
      
      // : {
      //   "Content-Type": "application/json",
      //   ...options.headers,
      // },
    });


    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data?.returnMessage || "Something went wrong",
        response.status,
        data?.responseCode ?? -1
      );
    }

    if (data.returnCode !== 0) {
      throw new ApiError(
        data.responseMessage || "Request failed",
        response.status,
        data.responseCode
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

