"use client";

import { Toaster } from "@repo/ui/components/ui/sonner";
import { AlertDialogRenderer } from "@repo/ui/components/alert-dialog/AlertDialogRenderer"
import { SearchParamsMessageToastSuspended } from "@repo/ui/components/searchparams-message/SearchParamsMessageToast";
import { useCustomSearchParams } from "@/hooks/useCustomSearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@repo/ui/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { GoogleReCaptchaProvider } from "@repo/ui/components/GoogleReCaptchaProvider";
import { env } from "@repo/ui/lib/env";
import { LoadingProvider } from '@repo/ui/contexts/LoadingContext';
import { EditableContentProvider } from "@repo/ui/contexts/EditableContentContext";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={env.NEXT_PUBLIC_SITE_KEY_RECAPTCHA}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <LoadingProvider>
              <EditableContentProvider>
                <Toaster />
                <AlertDialogRenderer />
                <SearchParamsMessageToastSuspended useCustomSearchParams={useCustomSearchParams} />
                {children}
              </EditableContentProvider>
            </LoadingProvider>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
};
