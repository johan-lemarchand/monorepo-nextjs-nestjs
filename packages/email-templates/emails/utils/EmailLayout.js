"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const server_url_1 = require("../../../ui/src/lib/server-url");
const components_1 = require("@react-email/components");
const tailwind_1 = require("@react-email/tailwind");
const getServerUrl = (0, server_url_1.createGetServerUrl)({
    prodUrl: process.env.VERCEL_URL || "",
});
const EmailLayout = (props) => {
    const { siteConfig } = props;
    let baseUrl = getServerUrl();
    if (baseUrl.startsWith("http://localhost")) {
        baseUrl = siteConfig.prodUrl;
    }
    return ((0, jsx_runtime_1.jsxs)(components_1.Html, { children: [(0, jsx_runtime_1.jsx)(components_1.Head, {}), (0, jsx_runtime_1.jsx)(components_1.Body, { style: {
                    backgroundColor: "#ffffff",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                }, children: (0, jsx_runtime_1.jsxs)(components_1.Container, { style: {
                        margin: "0 auto",
                        backgroundSize: "contain",
                        backgroundPosition: "bottom",
                        backgroundRepeat: "no-repeat",
                        padding: "1.5rem",
                    }, children: [(0, jsx_runtime_1.jsx)(tailwind_1.Tailwind, { children: (0, jsx_runtime_1.jsx)("table", { cellPadding: 0, cellSpacing: 0, children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "pr-2", children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: `${baseUrl}${siteConfig.appIcon}`, width: 32, height: 32, className: "inline", alt: `${siteConfig.title}'s logo` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(components_1.Text, { className: "text-xl font-bold", children: siteConfig.title }) })] }) }) }), props.disableTailwind ? (props.children) : ((0, jsx_runtime_1.jsx)(tailwind_1.Tailwind, { children: props.children })), (0, jsx_runtime_1.jsxs)(tailwind_1.Tailwind, { children: [(0, jsx_runtime_1.jsx)(components_1.Hr, { className: "mb-6 mt-12 border-gray-300" }), (0, jsx_runtime_1.jsx)("table", { cellPadding: 0, cellSpacing: 0, children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "pr-2", children: (0, jsx_runtime_1.jsx)(components_1.Img, { src: `${baseUrl}${siteConfig.appIcon}`, width: 32, height: 32, className: "inline", alt: `${siteConfig.title}'s logo` }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(components_1.Text, { className: "text-xl", children: siteConfig.title }) })] }) }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: "text-sm text-gray-500", children: siteConfig.company.name }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: "text-sm text-gray-500", children: siteConfig.company.address })] })] }) })] }));
};
exports.EmailLayout = EmailLayout;
//# sourceMappingURL=EmailLayout.js.map