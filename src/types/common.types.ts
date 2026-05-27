// src/types/api.types.ts
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

// src/types/common.types.ts
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: "student" | "admin" | "corporate";
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  price: number;
}
