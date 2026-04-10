import { base, heading, handwriting, display } from "@/constants";
import "@/styles/globals.css";
import { cn, generateMetadata } from "@/utils";
import Providers from "@/components/global/providers";
import FlareCursor from "@/components/global/flare-cursor";
import LoadingScreen from "@/components/global/loading-screen";
import Script from "next/script";
import type { ReactNode } from "react";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/images/anmix-logo.png" type="image/png" />
                <meta name="theme-color" content="#0055FF" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="ANMIX AI" />
                <link rel="apple-touch-icon" href="/images/anmix-logo.png" />
                <link rel="apple-touch-startup-image" href="/images/anmix-logo.png" />
                <meta name="msapplication-TileImage" content="/images/anmix-logo.png" />
                <meta name="msapplication-TileColor" content="#020617" />
            </head>
            <body
                className={cn(
                    "min-h-dvh bg-background text-foreground font-base antialiased overflow-x-hidden dark",
                    base.variable,
                    heading.variable,
                    handwriting.variable,
                    display.variable,
                )}
            >
                <Providers>
                    <LoadingScreen />
                    <FlareCursor />
                    {children}
                </Providers>
                {process.env.NODE_ENV === "production" && (
                    <Script
                        id="sw-register"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                if ('serviceWorker' in navigator) {
                                    window.addEventListener('load', function() {
                                        navigator.serviceWorker.register('/sw.js')
                                            .then(function(reg) { console.log('SW registered'); })
                                            .catch(function(err) { console.log('SW error:', err); });
                                    });
                                }
                            `,
                        }}
                    />
                )}
            </body>
        </html>
    );
};
