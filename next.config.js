/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

module.exports = nextConfig;

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   reactStrictMode: false,
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     maximumFileSizeToCacheInBytes: 5000000,
//   },
// });
