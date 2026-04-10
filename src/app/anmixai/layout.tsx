import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import FlareCursor from "@/components/flare-cursor";
import { ClerkClientProvider } from "@/components/clerk-client-provider";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ANMIX AI - Neural OS",
  description: "All-in-one AI platform for chat, image generation, video creation, and voice agents.",
};

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";
const hasClerkKey = clerkPubKey.length > 0 && !clerkPubKey.includes("YOUR_KEY");

export default function AnmixAILayout({
  children,
}: {
  children: ReactNode;
}) {
  const inner = (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <FlareCursor />
      {children}
    </ThemeProvider>
  );

  if (hasClerkKey) {
    return (
      <ClerkClientProvider publishableKey={clerkPubKey}>
        {inner}
      </ClerkClientProvider>
    );
  }

  return <>{inner}</>;
}
