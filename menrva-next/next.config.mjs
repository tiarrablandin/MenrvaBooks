import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "http",
        hostname: "covers.openlibrary.org",
        pathname: "/**",
        port: "",
      },
    ],
  },
  webpack(config, { dev, isServer }) {
    if (!dev) {
      config.devtool = false;
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
