import mongoose from "mongoose";
import crypto from "node:crypto";

const userSchema = new mongoose.Schema(
  {
    anonymousId: { type: String, unique: true, sparse: true, default: () => crypto.randomUUID() },
    name: { type: String, trim: true, maxlength: 80 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    passwordHash: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["student", "admin"], default: "student" }
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export async function prepareUserCollection() {
  try {
    await User.createCollection();
    const indexes = await User.collection.indexes();
    const anonymousIndex = indexes.find((index) => index.name === "anonymousId_1");

    if (anonymousIndex && !anonymousIndex.sparse) {
      await User.collection.dropIndex("anonymousId_1");
    }
  } catch (error) {
    if ((error as any).codeName !== "NamespaceNotFound" && (error as any).code !== 26) {
      throw error;
    }
  }

  await User.syncIndexes();
}
