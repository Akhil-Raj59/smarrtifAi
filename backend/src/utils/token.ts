import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface TokenPayload {
  sub: string;
  name: string;
  email: string;
  role: string;
}

export function signToken(user: { _id: unknown; name?: string; email: string; role?: string }): string {
  return jwt.sign(
    {
      sub: String(user._id),
      name: user.name ?? "",
      email: user.email,
      role: user.role ?? "student",
    },
    env.jwtSecret,
    { expiresIn: "7d" }
  );
}
