const { withPlausibleProxy } = require("next-plausible");

/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui", "framer-motion"],
};

const config = withPlausibleProxy()(nextConfig);

module.exports = config;
