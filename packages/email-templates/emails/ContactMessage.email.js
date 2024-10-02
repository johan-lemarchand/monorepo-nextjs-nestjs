"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContactMessageEmail;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@react-email/components");
const EmailLayout_1 = require("./utils/EmailLayout");
const components_utils_1 = require("./utils/components.utils");
function ContactMessageEmail({ name, email, phone, message, siteName, siteConfig }) {
    return ((0, jsx_runtime_1.jsxs)(EmailLayout_1.EmailLayout, { siteConfig: siteConfig, children: [(0, jsx_runtime_1.jsxs)(components_1.Preview, { children: ["Nouveau message de contact de ", name] }), (0, jsx_runtime_1.jsxs)(components_utils_1.EmailSection, { children: [(0, jsx_runtime_1.jsx)(components_utils_1.EmailText, { children: "Bonjour," }), (0, jsx_runtime_1.jsx)(components_utils_1.EmailText, { children: "Vous avez re\u00E7u un nouveau message de contact avec les d\u00E9tails suivants :" }), (0, jsx_runtime_1.jsxs)(components_utils_1.EmailText, { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nom :" }), " ", name, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("strong", { children: "Email :" }), " ", email, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("strong", { children: "T\u00E9l\u00E9phone :" }), " ", phone] }), (0, jsx_runtime_1.jsxs)(components_utils_1.EmailText, { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Message :" }), (0, jsx_runtime_1.jsx)("br", {}), message] })] }), (0, jsx_runtime_1.jsxs)(components_1.Text, { className: "text-lg leading-6", children: ["Cordialement,", (0, jsx_runtime_1.jsx)("br", {}), "- L'\u00E9quipe ", siteName] })] }));
}
//# sourceMappingURL=ContactMessage.email.js.map