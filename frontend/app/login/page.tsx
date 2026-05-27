import AuthPage from "@/components/auth/AuthPage";

export const metadata = {
  title: "Login - SMARRTIF AI",
};

import { Suspense } from "react";

export default function LoginRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPage mode="login" />
    </Suspense>
  );
}
