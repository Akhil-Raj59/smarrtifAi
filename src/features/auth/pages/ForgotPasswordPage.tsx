import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock send reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 flex items-center justify-center p-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row max-w-4xl w-full overflow-hidden min-h-[550px] animate-fade-in">
        {/* Left Side: Blur Gradient Panel */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 p-12 flex-col justify-end relative overflow-hidden">
          {/* Blur circles */}
          <div className="absolute top-[-10%] right-[-10%] w-72 h-72 rounded-full bg-yellow-300/40 blur-3xl" />
          <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 rounded-full bg-rose-500/30 blur-3xl" />
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Your gateway to hands-on learning and career transformation
            </h2>
          </div>
        </div>

        {/* Right Side: Form / Success Card */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto space-y-6">
            {!isSubmitted ? (
              <>
                {/* Title Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[var(--brand-orange)]">
                  <KeyRound className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Forgot password?
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Enter the email address associated with your account, and we'll email you a link to reset your password.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                        <Mail className="h-4.5 w-4.5" />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-400 to-rose-400 hover:opacity-95 hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? "Sending link..." : "Send reset link"}
                  </button>
                </form>

                <div className="text-center pt-2">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[var(--brand-orange)] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center space-y-6 py-4 animate-fade-in">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Reset link sent!
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    We've sent a password reset link to <strong className="text-gray-700">{email}</strong>. Please check your inbox.
                  </p>
                </div>

                <div className="p-4 bg-orange-50/50 border border-orange-100 rounded-2xl text-xs text-left text-orange-800 leading-relaxed">
                  <strong>Tip:</strong> If you don't receive the email within a few minutes, check your spam or junk folder, or click below to re-enter your email.
                  <div className="mt-2 text-right">
                    {/* Simulated reset link for demonstration */}
                    <Link
                      to={`/reset-password?email=${encodeURIComponent(email)}`}
                      className="font-bold underline text-[var(--brand-orange)] hover:text-[var(--brand-red)]"
                    >
                      [Demo: Open Reset Password Screen]
                    </Link>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-orange)] hover:underline"
                >
                  Did not receive? Resend link
                </button>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[var(--brand-orange)] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
