import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { connectDb } from "./config/db";
import authRoutes from "./routes/authRoutes";

const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: env.clientOrigin,
    credentials: true,
  })
);
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", env: env.nodeEnv });
});

// ─── 404 handler ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: "Route not found." });
});

// ─── Global error handler ─────────────────────────────────────────────────────
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error." });
});

// ─── Bootstrap ────────────────────────────────────────────────────────────────
async function startServer(): Promise<void> {
  try {
    await connectDb();
    app.listen(env.port, () => {
      console.log(`🚀 Backend running → http://localhost:${env.port} [${env.nodeEnv}]`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
