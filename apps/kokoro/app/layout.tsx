import { NextTopLoader } from "@repo/ui/components/page/NextTopLoader";
import { getServerUrl } from "@/lib/server-url";
import { cn } from "@repo/ui/lib/utils";
import { SiteConfig } from "@/site-config";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import type { ReactNode } from "react";
import "./code-theme.scss";
import "./globals.scss";
import { Providers } from "./providers";
import { ClientRootLayoutContent } from "./clientRootLayoutContent";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
                                     children,
                                     modal,
                                   }: LayoutParams & { modal?: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
    <head>
      <PlausibleProvider domain={SiteConfig.domain} />
      <title>médiation par l'animal</title>
    </head>
    <body
      suppressHydrationWarning
      className={cn(
        "h-full bg-background font-sans antialiased"
      )}
    >
    <Providers>
      <NextTopLoader
        delay={100}
        showSpinner={false}
        color="hsl(var(--primary))"
      />
      <ClientRootLayoutContent>
        {children}
        {modal}
      </ClientRootLayoutContent>
    </Providers>
    </body>
    </html>
  );
}
