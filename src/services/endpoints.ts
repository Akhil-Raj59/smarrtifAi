/**
 * API Endpoints Configuration
 */
export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    ME: "/auth/me",
  },
  COURSES: {
    LIST: "/courses",
    DETAIL: (id: string) => `/courses/${id}`,
  },
  USER: {
    PROFILE: "/user/profile",
    DASHBOARD: "/user/dashboard",
  },
  ASSESSMENT: {
    SUBMIT: "/assessment/submit",
  },
} as const;

export type EndpointKey = keyof typeof ENDPOINTS;
