import apiClient from "./api-client";
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * Request Interceptor: Attach Auth Token
 */

 
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("auth_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor: Centralized Error Handling
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    const message = (error.response?.data as any)?.message || "An unexpected error occurred";

    // Handle specific status codes
    switch (status) {
      case 401:
        // Unauthorized: Clear token and redirect
        localStorage.removeItem("auth_token");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        break;
      case 403:
        console.error("[API Error] Forbidden: You don't have permission.");
        break;
      case 404:
        console.error("[API Error] Not Found: Resource does not exist.");
        break;
      case 500:
        console.error("[API Error] Internal Server Error.");
        break;
      default:
        console.error(`[API Error] ${status || "Network Error"}: ${message}`);
    }

    return Promise.reject(error);
  }
); 

export default apiClient;
