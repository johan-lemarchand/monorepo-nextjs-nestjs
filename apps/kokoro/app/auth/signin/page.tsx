import { LogoSvg } from "@repo/ui/components/svg/LogoSvg";
import { Alert, AlertDescription, AlertTitle } from "@repo/ui/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { HeaderBase } from "@/features/layouts/HeaderBase";
import { checkAuthStatus } from "@repo/ui/lib/api/auth";
import type { PageParams } from "@/types/next";
import { AlertTriangle } from "@repo/ui/icons";
import { redirect } from "next/navigation";
import { getError } from "@repo/ui/components/error/auth-error-mapping";
import { SignInProviders } from "./SignInProviders";

export default async function AuthSignInPage(props: PageParams) {
  const { errorMessage, error } = getError(props.searchParams.error);

  const isAuthenticated = await checkAuthStatus();

  if (isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="flex h-full flex-col">
      <HeaderBase />
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-md lg:max-w-lg lg:p-6">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <LogoSvg />
            <CardTitle>Connectez-vous à votre compte</CardTitle>
          </CardHeader>
          <CardContent className="mt-8">
            <SignInProviders />
          </CardContent>
          {error ? (
            <Alert>
              <AlertTriangle size={16} />
              <AlertDescription>{error}</AlertDescription>
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
