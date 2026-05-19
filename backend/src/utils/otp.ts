import bcrypt from "bcryptjs";

export function createOtpCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export function hashValue(value: string) {
  return bcrypt.hash(value, 12);
}

export function compareValue(value: string, hash: string) {
  return bcrypt.compare(value, hash);
}
