import { createGetServerUrl } from "../../../ui/src/lib/server-url";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import type { PropsWithChildren } from "react";

const getServerUrl = createGetServerUrl({
  prodUrl: process.env.VERCEL_URL || "",
});

interface SiteConfigProps {
  title: string;
  appIcon: string;
  prodUrl: string;
  company: {
    name: string;
    address: string;
  };
}

export const EmailLayout = (
  props: PropsWithChildren<{
    disableTailwind?: boolean;
    siteConfig: SiteConfigProps;
  }>
) => {
  const { siteConfig } = props;
  let baseUrl = getServerUrl();

  // Email software can't handle localhost URL
  if (baseUrl.startsWith("http://localhost")) {
    baseUrl = siteConfig.prodUrl;
  }

  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#ffffff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            padding: "1.5rem",
          }}
        >
          <Tailwind>
            <table cellPadding={0} cellSpacing={0}>
              <tr>
                <td className="pr-2">
                  <Img
                    src={`${baseUrl}${siteConfig.appIcon}`}
                    width={32}
                    height={32}
                    className="inline"
                    alt={`${siteConfig.title}'s logo`}
                  />
                </td>
                <td>
                  <Text className="text-xl font-bold">{siteConfig.title}</Text>
                </td>
              </tr>
            </table>
          </Tailwind>
          {props.disableTailwind ? (
            props.children
          ) : (
            <Tailwind>{props.children}</Tailwind>
          )}
          <Tailwind>
            <Hr className="mb-6 mt-12 border-gray-300" />

            <table cellPadding={0} cellSpacing={0}>
              <tr>
                <td className="pr-2">
                  <Img
                    src={`${baseUrl}${siteConfig.appIcon}`}
                    width={32}
                    height={32}
                    className="inline"
                    alt={`${siteConfig.title}'s logo`}
                  />
                </td>
                <td>
                  <Text className="text-xl">{siteConfig.title}</Text>
                </td>
              </tr>
            </table>
            <Text className="text-sm text-gray-500">
              {siteConfig.company.name}
            </Text>
            <Text className="text-sm text-gray-500">
              {siteConfig.company.address}
            </Text>
          </Tailwind>
        </Container>
      </Body>
    </Html>
  );
};
