import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { User, prepareUserCollection } from "../models/User";
import { Otp } from "../models/Otp";
import { signToken } from "../utils/token";
import { createOtpCode, hashValue, compareValue } from "../utils/otp";
import { sendSignupOtp } from "../services/mailService";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

const signupSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  password: z.string().min(8)
});

const verifySchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  password: z.string().min(8),
  otp: z.string().regex(/^\d{6}$/)
});

function sanitizeUser(user: any) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    emailVerified: user.emailVerified
  };
}

export const login = async (req: Request, res: Response) => {
  try {
    const input = loginSchema.parse(req.body);
    const user = await User.findOne({ email: input.email.toLowerCase() } as any);
    
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const valid = await bcrypt.compare(input.password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    return res.status(200).json({ token: signToken(user), user: sanitizeUser(user) });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Please provide a valid email and password." });
    }
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const requestSignupOtp = async (req: Request, res: Response) => {
  try {
    const input = signupSchema.parse(req.body);
    const email = input.email.toLowerCase();

    const code = createOtpCode();
    const [passwordHash, codeHash] = await Promise.all([bcrypt.hash(input.password, 12), hashValue(code)]);
    
    await Otp.findOneAndUpdate({ email } as any,
      {
        email,
        name: input.name,
        passwordHash,
        codeHash,
        attempts: 0,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000)
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    await sendSignupOtp({ email, code });
    
    return res.status(202).json({ message: "OTP sent to the configured signup email." });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Please provide a valid name, email, and 8+ character password." });
    }
    console.error("Signup OTP error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

async function completeSignupUser(email: string, otpRecord: any, retriedLegacyIndex = false) {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      existingUser.name = otpRecord.name;
      existingUser.passwordHash = otpRecord.passwordHash;
      existingUser.emailVerified = true;
      return await existingUser.save();
    }

    return await User.create({
      name: otpRecord.name,
      email,
      passwordHash: otpRecord.passwordHash,
      emailVerified: true
    });
  } catch (error: any) {
    if ((error as any).code !== 11000) {
      throw error;
    }

    if ((error as any).keyPattern?.anonymousId && !retriedLegacyIndex) {
      await prepareUserCollection();
      return completeSignupUser(email, otpRecord, true);
    }

    const recoveredUser = await User.findOneAndUpdate({ email } as any,
      {
        $set: {
          name: otpRecord.name,
          passwordHash: otpRecord.passwordHash,
          emailVerified: true
        }
      },
      { new: true }
    );

    if (!recoveredUser) {
      throw error;
    }

    return recoveredUser;
  }
}

export const verifySignup = async (req: Request, res: Response) => {
  try {
    const input = verifySchema.parse(req.body);
    const email = input.email.toLowerCase();
    
    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord || otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: "OTP expired. Please request a new code." });
    }
    if (otpRecord.attempts >= 5) {
      return res.status(429).json({ message: "Too many OTP attempts. Please request a new code." });
    }

    const valid = await compareValue(input.otp, otpRecord.codeHash);
    if (!valid) {
      otpRecord.attempts += 1;
      await otpRecord.save();
      return res.status(400).json({ message: "Invalid OTP." });
    }

    const user = await completeSignupUser(email, otpRecord);

    await Otp.deleteMany({ email });
    
    return res.status(201).json({ token: signToken(user), user: sanitizeUser(user) });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Invalid signup verification payload." });
    }
    console.error("Verify signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
