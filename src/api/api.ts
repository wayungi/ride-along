const API_URL = "http://localhost:8080/api/v1";

interface ApiRequest {
  SERVICE: string;
  ACTION: string;
}

interface ApiResponse <T> {
  responseObject: <T>;
  responseCode: number;
  message?: string;
}

export const apiCall = async <T extends ApiResponse>(
  endpoint: string,
  request: ApiRequest,
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(request),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`API call failed: ${error.message}`);
  }
};