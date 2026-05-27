import bcrypt from "bcryptjs";
import { User } from "../models/User.js";

export const demoCredentials = {
  email: "demo@smarrtifai.com",
  password: "Demo@12345"
};

export async function ensureDemoUser() {
  const passwordHash = await bcrypt.hash(demoCredentials.password, 12);
  const user = await User.findOne({ email: demoCredentials.email });

  if (user) {
    user.name = "Demo Student";
    user.passwordHash = passwordHash;
    user.emailVerified = true;
    user.role = "student";
    await user.save();
    return user;
  }

  return User.create({
    name: "Demo Student",
    email: demoCredentials.email,
    passwordHash,
    emailVerified: true,
    role: "student"
  });
}
