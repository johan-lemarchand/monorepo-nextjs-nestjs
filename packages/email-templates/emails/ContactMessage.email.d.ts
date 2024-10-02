interface ContactMessageEmailProps {
    name: string;
    email: string;
    phone: string;
    message: string;
    siteName: string;
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
export default function ContactMessageEmail({ name, email, phone, message, siteName, siteConfig }: ContactMessageEmailProps): import("react/jsx-runtime").JSX.Element;
export {};
