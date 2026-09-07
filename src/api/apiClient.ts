import { ApiError } from "../types/api";

const API_URL = import.meta.env.VITE_API_URL;

export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data?.responseMessage || "Something went wrong",
        response.status,
        data?.responseCode ?? -1
      );
    }

    if (data.responseCode !== 0) {
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






















// import { ApiError } from "../types/api";

// const API_URL = "http://localhost:8080/api/v1";

// export const apiClient = async <T>( endpoint: string,  options: RequestInit = {} ): Promise<T> => {

//   try {
//     const response = await fetch(`${API_URL}${endpoint}`, {
//       ...options,
//       headers: {
//         "Content-Type": "application/json",
//         ...options.headers,
//       },
//     });

//     let data: any;

//     try {
//       data = await response.json();
//     } catch {
//       throw new ApiError(
//         "Invalid response from server",
//         response.status,
//         -1
//       );
//     }

//     // HTTP error
//     if (!response.ok) {
//       throw new ApiError(
//         data?.responseMessage || "Something went wrong",
//         response.status,
//         data?.responseCode ?? -1
//       );
//     }

//     // Application-level error
//     if (data.responseCode !== 0) {
//       throw new ApiError(
//         data.responseMessage || "Request failed",
//         response.status,
//         data.responseCode
//       );
//     }

//     return data;

//   } catch (error) {

//     // Already our ApiError
//     if (error instanceof ApiError) {
//       throw error;
//     }

//     // Network error
//     throw new ApiError(
//       "Unable to connect to the server",
//       0,
//       -1
//     );
//   }
// };

