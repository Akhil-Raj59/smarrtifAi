"use client";
import { Brain, Eye, EyeOff, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Brand from "../Brand";
import { useAuth } from "@/context/AuthContext";

// ─── Constants ────────────────────────────────────────────────────────────────
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

const FEATURES = [
  { icon: Sparkles, label: "AI-powered learning paths" },
  { icon: Shield,   label: "Industry-recognised certifications" },
  { icon: Zap,      label: "Live mentorship & projects" },
];

// ─── API helper ───────────────────────────────────────────────────────────────
async function apiPost<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => {
    throw new Error("Unable to connect to the server. Please try again.");
  });
  if (!res.ok) throw new Error(data.message ?? "Something went wrong.");
  return data as T;
}

// ─── Component ────────────────────────────────────────────────────────────────
type Mode = "login" | "signup";
type Step = "form" | "otp";

export default function AuthPage({ mode }: { mode: Mode }) {
  const isSignup = mode === "signup";
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") ?? "/";
  const { token, login } = useAuth();

  const formId = useId();
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({ name: "", email: "", password: "", otp: "" });
  const [status, setStatus] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (token) router.replace(redirectTo);
  }, [token, router, redirectTo]);

  function patch(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      if (isSignup && step === "form") {
        await apiPost("/auth/request-signup-otp", {
          name: form.name,
          email: form.email,
          password: form.password,
        });
        setStep("otp");
        setStatus({ message: "✅ OTP sent to your email. Check your inbox.", type: "success" });
        return;
      }

      if (isSignup && step === "otp") {
        const data = await apiPost<{ token: string; user: any }>("/auth/verify-signup", form);
        login(data.token, data.user);
        router.replace(redirectTo);
        return;
      }

      // Login
      const data = await apiPost<{ token: string; user: any }>("/auth/login", {
        email: form.email,
        password: form.password,
      });
      login(data.token, data.user);
      router.replace(redirectTo);
    } catch (err: any) {
      setStatus({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  }

  const submitLabel = loading
    ? "Please wait…"
    : isSignup && step === "otp"
    ? "Verify & Create Account"
    : isSignup
    ? "Create Account"
    : "Sign In";

  return (
    <main className="auth-shell">
      {/* Left panel */}
      <div className="auth-brand-panel">
        <div className="auth-brand-panel__inner">
          <Brand />
          <h1>Your gateway to hands-on learning and career transformation</h1>
          <ul className="auth-features">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className="auth-feature-icon"><Icon size={18} /></span>
                {label}
              </li>
            ))}
          </ul>
        </div>
        {/* Decorative blobs */}
        <div className="auth-blob auth-blob--1" aria-hidden />
        <div className="auth-blob auth-blob--2" aria-hidden />
        <div className="auth-blob auth-blob--3" aria-hidden />
      </div>

      {/* Right panel */}
      <section className="auth-form-panel">
        <form
          id={formId}
          className="auth-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Icon */}
          <span className="auth-icon" aria-hidden>
            <Brain size={26} />
          </span>

          <h2 className="auth-heading">
            {isSignup ? "Create an account" : "Welcome back"}
          </h2>
          <p className="auth-sub">
            {isSignup
              ? "Start your personalised AI career journey today."
              : "Sign in to continue your SMARRTIF AI journey."}
          </p>

          {/* Step indicator for signup */}
          {isSignup && (
            <div className="auth-steps" aria-label="Step progress">
              <div className={`auth-step ${step === "form" ? "auth-step--active" : "auth-step--done"}`}>
                <span>1</span> Details
              </div>
              <div className="auth-step-line" />
              <div className={`auth-step ${step === "otp" ? "auth-step--active" : ""}`}>
                <span>2</span> Verify
              </div>
            </div>
          )}

          {/* Fields */}
          <div className="auth-fields">
            {isSignup && step === "form" && (
              <label className="auth-label" htmlFor={`${formId}-name`}>
                Full name
                <input
                  id={`${formId}-name`}
                  value={form.name}
                  onChange={patch("name")}
                  placeholder="Natasha Singh"
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </label>
            )}

            {step === "form" && (
              <>
                <label className="auth-label" htmlFor={`${formId}-email`}>
                  Email address
                  <input
                    id={`${formId}-email`}
                    type="email"
                    value={form.email}
                    onChange={patch("email")}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="auth-label" htmlFor={`${formId}-password`}>
                  {isSignup ? "Create password" : "Password"}
                  <span className="auth-password-wrap">
                    <input
                      id={`${formId}-password`}
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={patch("password")}
                      placeholder="••••••••••••"
                      autoComplete={isSignup ? "new-password" : "current-password"}
                      required
                      minLength={isSignup ? 8 : 1}
                    />
                    <button
                      type="button"
                      className="auth-eye"
                      onClick={() => setShowPassword(v => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </span>
                </label>
              </>
            )}

            {isSignup && step === "otp" && (
              <label className="auth-label" htmlFor={`${formId}-otp`}>
                Verification code
                <input
                  id={`${formId}-otp`}
                  value={form.otp}
                  onChange={patch("otp")}
                  placeholder="6-digit code"
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  required
                  autoFocus
                />
                <span className="auth-hint">
                  Enter the 6-digit code sent to {form.email || "your email"}.
                </span>
              </label>
            )}
          </div>

          {/* Status message */}
          {status && (
            <p
              role="alert"
              className={`auth-status auth-status--${status.type}`}
            >
              {status.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
            form={formId}
          >
            {submitLabel}
            {!loading && <ArrowRight size={18} />}
          </button>

          {/* Back link for OTP step */}
          {isSignup && step === "otp" && (
            <button
              type="button"
              className="auth-back"
              onClick={() => { setStep("form"); setStatus(null); }}
            >
              ← Back
            </button>
          )}

          {/* Switch link */}
          <p className="auth-switch">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link href={isSignup ? "/login" : "/signup"}>
              {isSignup ? "Sign in" : "Register free"}
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
