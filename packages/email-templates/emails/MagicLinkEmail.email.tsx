import { Preview, Text } from "@react-email/components";
import { EmailLayout } from "./utils/EmailLayout";
import { EmailLink, EmailSection, EmailText } from "./utils/components.utils";

interface MagicLinkMailProps {
  url: string;
  makerName: string;
  siteTitle: string;
  siteConfig: {
    title: string;
    appIcon: string;
    prodUrl: string;
    company: {
      name: string;
      address: string;
    };
  };
}

export default function MagicLinkMail({ url, makerName, siteTitle, siteConfig }: MagicLinkMailProps) {
  return (
    <EmailLayout siteConfig={siteConfig}>
      <Preview>
        Vous avez demandé un lien magique pour vous connecter à votre compte.
      </Preview>
      <EmailSection>
        <EmailText>
          <EmailLink href={url}>👉 Cliquez ici pour vous connecter 👈</EmailLink>
        </EmailText>
        <EmailText>
          Si vous n'avez pas demandé cela, veuillez ignorer cet e-mail.
        </EmailText>
      </EmailSection>
      <Text className="text-lg leading-6">
        Meilleur,
        <br />- {makerName} de {siteTitle}
      </Text>
    </EmailLayout>
  );
}
