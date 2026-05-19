import AuthPage from "@/components/auth/AuthPage";

export const metadata = {
  title: "Signup - SMARRTIF AI",
};

import { Suspense } from "react";

export default function SignupRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPage mode="signup" />
    </Suspense>
  );
}
