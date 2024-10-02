"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetServerUrl = void 0;
const createGetServerUrl = (config) => {
    return () => {
        if (typeof window !== "undefined") {
            return window.location.origin;
        }
        if (process.env.VERCEL_ENV === "production") {
            return config.prodUrl;
        }
        if (process.env.VERCEL_URL) {
            return `https://${process.env.VERCEL_URL}/`;
        }
        return "http://localhost:3000/";
    };
};
exports.createGetServerUrl = createGetServerUrl;
//# sourceMappingURL=server-url.js.map