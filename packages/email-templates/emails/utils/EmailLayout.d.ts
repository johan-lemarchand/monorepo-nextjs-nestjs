import type { PropsWithChildren } from "react";
interface SiteConfigProps {
    title: string;
    appIcon: string;
    prodUrl: string;
    company: {
        name: string;
        address: string;
    };
}
export declare const EmailLayout: (props: PropsWithChildren<{
    disableTailwind?: boolean;
    siteConfig: SiteConfigProps;
}>) => import("react/jsx-runtime").JSX.Element;
export {};
