/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {},
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
  },
};

module.exports = nextConfig;
