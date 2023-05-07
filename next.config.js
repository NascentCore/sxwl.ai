/** @type {import('next').NextConfig} */
const { getBlogList } = require("./blog");
const blogList = getBlogList();
const nextConfig = {
  serverRuntimeConfig: {
    blogList,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
