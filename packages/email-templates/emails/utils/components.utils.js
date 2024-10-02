"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSection = exports.EmailText = exports.EmailLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../../../ui/src/lib/utils");
const components_1 = require("@react-email/components");
const EmailLink = (props) => {
    return ((0, jsx_runtime_1.jsx)(components_1.Link, { ...props, className: (0, utils_1.cn)("text-indigo-500 hover:underline", props.className) }));
};
exports.EmailLink = EmailLink;
const EmailText = (props) => {
    return ((0, jsx_runtime_1.jsx)(components_1.Text, { ...props, className: (0, utils_1.cn)("text-lg leading-6", props.className) }));
};
exports.EmailText = EmailText;
const EmailSection = (props) => {
    return (0, jsx_runtime_1.jsx)(components_1.Section, { ...props, className: (0, utils_1.cn)("my-6", props.className) });
};
exports.EmailSection = EmailSection;
//# sourceMappingURL=components.utils.js.map