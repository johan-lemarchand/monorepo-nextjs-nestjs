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
export default function MagicLinkMail({ url, makerName, siteTitle, siteConfig }: MagicLinkMailProps): import("react/jsx-runtime").JSX.Element;
export {};
