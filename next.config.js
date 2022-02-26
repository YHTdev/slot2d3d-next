/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
    skipWaiting: true,
  },
});

module.exports = nextConfig;
