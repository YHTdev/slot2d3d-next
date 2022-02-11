const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
