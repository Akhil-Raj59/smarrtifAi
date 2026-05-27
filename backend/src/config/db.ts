import mongoose from "mongoose";
import { env } from "./env";

if (!env.mongoUri) {
  throw new Error(
    "MONGODB_URI environment variable is not defined. Please add it to your .env file."
  );
}

let isConnected = false;

export async function connectDb(): Promise<void> {
  if (isConnected) return;

  await mongoose.connect(env.mongoUri as string, {
    bufferCommands: false,
  });

  isConnected = true;
  console.log("✅ MongoDB connected");
}
