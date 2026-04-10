"use client";

import { ClerkProvider } from "@clerk/nextjs";

export function ClerkClientProvider({
  children,
  publishableKey,
}: {
  children: React.ReactNode;
  publishableKey: string;
}) {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      signInUrl="/anmixai/sign-in"
      signUpUrl="/anmixai/sign-up"
      signInFallbackRedirectUrl="/anmixai"
      signUpFallbackRedirectUrl="/anmixai"
    >
      {children}
    </ClerkProvider>
  );
}
