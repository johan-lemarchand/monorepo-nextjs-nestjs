"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MagicLinkMail;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const EmailLayout_1 = require("./utils/EmailLayout");
const components_utils_1 = require("./utils/components.utils");
function MagicLinkMail({ url, makerName, siteTitle, siteConfig }) {
    return ((0, jsx_runtime_1.jsxs)(EmailLayout_1.EmailLayout, { siteConfig: siteConfig, children: [(0, jsx_runtime_1.jsx)(components_1.Preview, { children: "Vous avez demand\u00E9 un lien magique pour vous connecter \u00E0 votre compte." }), (0, jsx_runtime_1.jsxs)(components_utils_1.EmailSection, { children: [(0, jsx_runtime_1.jsx)(components_utils_1.EmailText, { children: (0, jsx_runtime_1.jsx)(components_utils_1.EmailLink, { href: url, children: "\uD83D\uDC49 Cliquez ici pour vous connecter \uD83D\uDC48" }) }), (0, jsx_runtime_1.jsx)(components_utils_1.EmailText, { children: "Si vous n'avez pas demand\u00E9 cela, veuillez ignorer cet e-mail." })] }), (0, jsx_runtime_1.jsxs)(components_1.Text, { className: "text-lg leading-6", children: ["Meilleur,", (0, jsx_runtime_1.jsx)("br", {}), "- ", makerName, " de ", siteTitle] })] }));
}
//# sourceMappingURL=MagicLinkEmail.email.js.map