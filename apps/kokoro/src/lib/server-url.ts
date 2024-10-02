import { createGetServerUrl } from "@repo/ui/lib/server-url";
import { SiteConfig } from "@/site-config";

export const getServerUrl = createGetServerUrl({
  prodUrl: SiteConfig.prodUrl,
});