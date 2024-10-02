import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Typography } from "@repo/ui/components/ui/typography";
import { SiteConfig } from "@/site-config";
import Image from "next/image";

export default async function AuthNewUserPage() {
  return (
    <div className="h-full">
      <header className="flex items-center gap-2 px-4 pt-4">
        <Image src={SiteConfig.appIcon} alt="app icon" width={32} height={32} />
        <Typography variant="h2">{SiteConfig.title}</Typography>
      </header>
      <div className="flex h-full items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Presque là !</CardTitle>
            <CardDescription>
              Pour compléter la vérification, rendez-vous dans votre boîte de réception e-mail.
              Vous trouverez un lien magique de notre part. Cliquez dessus, et c'est tout bon !
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
